import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import type { DatePickerProps, CalendarView } from '@/interfaces/ui/datePicker.Interface'
import Calendar from '@/assets/images/icons/black/IconCalendar.svg'
export function DatePicker({
  value,
  onChange,
  placeholder = 'dd/mm/yyyy',
  className,
  disabled = false,
  maxDate = new Date(),
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const parseDate = (dateString: string): Date | null => {
    if (!dateString) return null

    // Check if it's in dd/mm/yyyy format
    const ddmmyyyyRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/
    const match = dateString.match(ddmmyyyyRegex)

    if (match) {
      const [, day, month, year] = match
      const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))
      if (!isNaN(date.getTime())) {
        return date
      }
    }

    // Try parsing as ISO format (yyyy-mm-dd)
    const date = new Date(dateString)
    if (!isNaN(date.getTime())) {
      return date
    }

    return null
  }

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(parseDate(value || ''))

  const [view, setView] = React.useState<CalendarView>('day')
  const [position, setPosition] = React.useState({ top: 0, left: 0, width: 0 })
  const containerRef = React.useRef<HTMLDivElement>(null)
  const calendarRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const maxYear = maxDate.getFullYear()
  const minYear = maxYear - 100
  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i)

  React.useEffect(() => {
    if (isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const calendarHeight = 400
      const spaceBelow = window.innerHeight - rect.bottom
      const spaceAbove = rect.top

      let top = rect.bottom + window.scrollY + 8

      if (spaceBelow < calendarHeight && spaceAbove > spaceBelow) {
        top = rect.top + window.scrollY - calendarHeight - 8
      }

      setPosition({
        top,
        left: rect.left + window.scrollX,
        width: rect.width,
      })
    }
  }, [isOpen])

  const formatDate = (date: Date | null) => {
    if (!date || isNaN(date.getTime())) return ''
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const formatDateForInput = (date: Date | null) => {
    if (!date || isNaN(date.getTime())) return ''
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setView('day')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const prevMonthLastDay = new Date(year, month, 0).getDate()
    const prevMonthDays = Array.from(
      { length: startingDayOfWeek },
      (_, i) => prevMonthLastDay - startingDayOfWeek + i + 1
    )

    const totalCells = 42
    const currentMonthDays = daysInMonth
    const nextMonthDays = totalCells - startingDayOfWeek - currentMonthDays

    return { daysInMonth, startingDayOfWeek, prevMonthDays, nextMonthDays }
  }

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    if (nextMonth <= new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)) {
      setCurrentMonth(nextMonth)
    }
  }

  const handleMonthSelect = (monthIndex: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), monthIndex))
    setView('day')
  }

  const handleYearSelect = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth()))
    setView('day')
  }

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    if (newDate <= maxDate) {
      setSelectedDate(newDate)
      onChange(formatDateForInput(newDate))
      setIsOpen(false)
      setView('day')
    }
  }

  const handleClear = () => {
    setSelectedDate(null)
    onChange('')
    setIsOpen(false)
    setView('day')
  }

  const isToday = (day: number) => {
    const today = new Date()
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    )
  }

  const isAfterMaxDate = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return date > maxDate
  }

  const isMonthAfterMaxDate = (monthIndex: number) => {
    const date = new Date(currentMonth.getFullYear(), monthIndex, 1)
    return date > new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)
  }

  const isYearAfterMaxDate = (year: number) => {
    return year > maxDate.getFullYear()
  }

  const { daysInMonth, prevMonthDays, nextMonthDays } = getDaysInMonth(currentMonth)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const calendarContent =
    isOpen && mounted ? (
      <div
        ref={calendarRef}
        style={{
          position: 'fixed',
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: '320px',
        }}
        className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-200 z-[100] p-1.5 rounded-lg"
      >
        <div className="flex items-center justify-between mb-0.5">
          <button
            onClick={handlePreviousMonth}
            className="p-1.5 pl-2 hover:bg-gray-100 transition-colors"
            type="button"
          >
            <span className="text-base font-bold text-gray-800">«</span>
          </button>
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => setView('month')}
              className={cn(
                'px-0.5 py-0 hover:bg-gray-100 transition-colors',
                currentMonth.getMonth() === months.indexOf(view as string) &&
                  'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
              )}
              type="button"
            >
              <span className="text-xs font-bold text-gray-900">
                {months[currentMonth.getMonth()]}
              </span>
            </button>
            <button
              onClick={() => setView('year')}
              className={cn(
                'px-0.5 py-0 hover:bg-gray-100 transition-colors',
                currentMonth.getFullYear() === Number.parseInt(view as string) &&
                  'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
              )}
              type="button"
            >
              <span className="text-xs font-bold text-gray-900">{currentMonth.getFullYear()}</span>
            </button>
          </div>
          <button
            onClick={handleNextMonth}
            className="p-1.5 pr-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
            disabled={
              currentMonth.getFullYear() === maxDate.getFullYear() &&
              currentMonth.getMonth() >= maxDate.getMonth()
            }
          >
            <span className="text-base font-bold text-gray-800">»</span>
          </button>
        </div>

        {view === 'month' && (
          <div className="grid grid-cols-3 gap-1 p-1">
            {months.map((month, index) => (
              <button
                key={month}
                onClick={() => handleMonthSelect(index)}
                disabled={isMonthAfterMaxDate(index)}
                className={cn(
                  'px-2 py-2 text-xs font-medium transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent',
                  currentMonth.getMonth() === index && 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                )}
                type="button"
              >
                {month}
              </button>
            ))}
          </div>
        )}

        {view === 'year' && (
          <div className="grid grid-cols-4 gap-1 p-1 max-h-[250px] overflow-y-auto">
            {years.map(year => (
              <button
                key={year}
                onClick={() => handleYearSelect(year)}
                disabled={isYearAfterMaxDate(year)}
                className={cn(
                  'px-2 py-2 text-xs font-medium transition-colors hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent',
                  currentMonth.getFullYear() === year &&
                    'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                )}
                type="button"
              >
                {year}
              </button>
            ))}
          </div>
        )}

        {view === 'day' && (
          <>
            <div className="grid grid-cols-7 gap-2.5">
              {weekDays.map((day, index) => (
                <div
                  key={index}
                  className="text-center text-[10px] font-bold text-gray-900 py-0 w-[42px]"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2.5 mt-1">
              {prevMonthDays.map((day, index) => (
                <div
                  key={`prev-${index}`}
                  className="w-[42px] h-8 flex items-center justify-center text-[10px] font-normal text-gray-300"
                >
                  {day}
                </div>
              ))}

              {days.map(day => (
                <button
                  key={day}
                  onClick={() => handleDateSelect(day)}
                  type="button"
                  disabled={isAfterMaxDate(day)}
                  className={cn(
                    'w-[42px] h-8 flex items-center justify-center text-xs font-normal transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent',
                    isSelected(day) && 'bg-[#3D64FE] text-white hover:bg-[#3D64FE]/90',
                    !isSelected(day) &&
                      isToday(day) &&
                      !selectedDate &&
                      'bg-[#3D64FE] text-white hover:bg-[#3D64FE]/90',
                    !isSelected(day) &&
                      (!isToday(day) || selectedDate) &&
                      'text-gray-900 hover:bg-gray-100'
                  )}
                >
                  {day}
                </button>
              ))}

              {Array.from({ length: nextMonthDays }, (_, i) => i + 1).map((day, index) => (
                <div
                  key={`next-${index}`}
                  className="w-[42px] h-8 flex items-center justify-center text-[10px] font-normal text-gray-300"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="mt-1 pt-0.5 border-t border-gray-200">
              <button
                onClick={handleClear}
                type="button"
                className="w-full text-center text-xs font-normal text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    ) : null

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={formatDate(selectedDate)}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          className={cn(
            'w-full bg-[#F9F9F9] border-0 text-gray-600 h-12 rounded-md px-4 pr-10 transition-colors duration-200 font-normal placeholder:text-gray-400 cursor-pointer focus-visible:outline-none',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
        />
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img src={Calendar} />
        </button>
      </div>

      {mounted && calendarContent && createPortal(calendarContent, document.body)}
    </div>
  )
}
