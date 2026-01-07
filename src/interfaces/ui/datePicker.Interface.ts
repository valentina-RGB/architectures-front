export interface DatePickerProps {
  value?: string
  onChange: (date: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  maxDate?: Date
}

export type CalendarView = 'day' | 'month' | 'year'

export interface CalendarMonthData {
  daysInMonth: number
  startingDayOfWeek: number
  prevMonthDays: number[]
  nextMonthDays: number
}

export interface CalendarPosition {
  top: number
  left: number
  width: number
}
