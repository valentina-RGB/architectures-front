import Save from '@/assets/images/icons/black/save.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DatePicker } from '@/components/ui/datePicker'
import type { UnifiedModalProps } from '@/interfaces/ui/modal.Interface'
import type { ModalFormData } from '@/interfaces/forms/formData.Interface'
import type { JSX } from 'react'
import { Label } from '@radix-ui/react-dropdown-menu'

export function UnifiedModal<T extends ModalFormData = ModalFormData>(
  props: UnifiedModalProps<T>
): JSX.Element | null {
  const isOpen = props.isOpen
  const onClose = props.onClose
  const title = props.title
  const mode = props.mode || 'edit'
  const profileData = props.profileData
  const showEditButton = props.showEditButton || false
  const onEdit = props.onEdit
  const fields = props.fields
  const formData = props.formData
  const onFormChange = props.onFormChange
  const onSubmit = props.onSubmit
  const gridColumns = props.gridColumns || 3
  const maxWidth = props.maxWidth || '5xl'
  const isPasswordModal = props.isPasswordModal || false
  const customPasswordDisplay = props.customPasswordDisplay
  const isModal = props.isModal !== undefined ? props.isModal : true
  const showFooter = props.showFooter !== undefined ? props.showFooter : true
  const inlineButtons = props.inlineButtons || false
  const hideAvatar = props.hideAvatar || false

  if (isModal && !isOpen) return null

  const isEditMode = mode === 'edit'
  const maxWidthClass =
    maxWidth === 'sm'
      ? 'max-w-sm'
      : maxWidth === 'md'
      ? 'max-w-md'
      : maxWidth === 'lg'
      ? 'max-w-lg'
      : maxWidth === 'xl'
      ? 'max-w-xl'
      : maxWidth === '2xl'
      ? 'max-w-2xl'
      : maxWidth === '3xl'
      ? 'max-w-3xl'
      : maxWidth === '4xl'
      ? 'max-w-4xl'
      : maxWidth === '5xl'
      ? 'max-w-5xl'
      : maxWidth === '6xl'
      ? 'max-w-6xl'
      : maxWidth === '7xl'
      ? 'max-w-7xl'
      : maxWidth === 'full'
      ? 'max-w-full'
      : 'max-w-5xl'

  const gridColsClass = gridColumns === 2 ? 'grid-cols-2' : 'grid-cols-3'

  const getFieldValue = (fieldName: string) => {
    return (formData as Record<string, string>)[fieldName] || ''
  }

  const setFieldValue = (fieldName: string, value: string) => {
    onFormChange({ ...formData, [fieldName]: value } as T)
  }

  const content = (
    <div
      className={`relative w-full ${maxWidthClass} rounded-2xl bg-white shadow-[23px_41px_100px_0px_rgba(10,20,57,0.21)] ${
        profileData ? 'max-h-[90vh] overflow-y-auto' : ''
      }`}
    >
      <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
        {profileData && !hideAvatar ? (
          <>
            <div className="flex items-center gap-5">
              <Avatar className="h-20 w-20 ring-2 ring-gray-100">
                <AvatarImage
                  src={profileData.avatarUrl || '/placeholder.svg'}
                  alt={profileData.name}
                />
                <AvatarFallback className="bg-blue-500 text-white text-xl font-semibold">
                  {profileData.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Lexxi</h3>
                <p className="text-sm text-gray-400 tracking-wider mt-0.5">*********</p>
              </div>
            </div>
            {showEditButton && !isEditMode && onEdit && (
              <Button
                onClick={onEdit}
                variant="default"
                className="bg-[#4182F9] hover:bg-[#3670d9] text-white px-6 py-2 rounded-md font-medium text-sm h-auto"
              >
                Editar
              </Button>
            )}
          </>
        ) : (
          <>
            <h2 className="text-base font-bold text-gray-900">{title}</h2>
            {showEditButton && !isEditMode && onEdit && (
              <Button
                onClick={onEdit}
                variant="default"
                className="bg-[#4182F9] hover:bg-[#3670d9] text-white px-6 py-2 rounded-md font-medium text-sm h-auto"
              >
                Editar
              </Button>
            )}
          </>
        )}
      </div>

      <div className="px-8 py-8">
        {isPasswordModal && customPasswordDisplay ? (
          customPasswordDisplay
        ) : (
          <div
            className={
              inlineButtons ? 'flex items-start gap-6' : `grid ${gridColsClass} gap-x-8 gap-y-4`
            }
          >
            {inlineButtons ? (
              <>
                <div className="flex-1 grid grid-cols-2 gap-6">
                  {fields.map(field => {
                    const colSpanClass =
                      field.colSpan === 1
                        ? 'col-span-1'
                        : field.colSpan === 2
                        ? 'col-span-2'
                        : field.colSpan === 3
                        ? 'col-span-3'
                        : ''

                    return (
                      <div key={field.name} className={`space-y-1 ${colSpanClass}`}>
                        <Label className="text-sm font-semibold text-gray-900">
                          {field.label}{' '}
                          {isEditMode && field.required && <span className="text-red-500">*</span>}
                        </Label>

                        {field.type === 'select' ? (
                          <Select
                            value={getFieldValue(field.name)}
                            onValueChange={val => setFieldValue(field.name, val)}
                            disabled={!isEditMode}
                            fullWidth={true}
                          >
                            <SelectTrigger className="w-full bg-[#F9F9F9] border-0 text-gray-600 h-12 rounded-md">
                              <SelectValue placeholder={field.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {field.options?.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : field.type === 'date' ? (
                          <DatePicker
                            value={getFieldValue(field.name)}
                            onChange={date => setFieldValue(field.name, date)}
                            placeholder={field.placeholder}
                            disabled={!isEditMode}
                          />
                        ) : (
                          <Input
                            type={field.type}
                            value={getFieldValue(field.name)}
                            onChange={e => setFieldValue(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            disabled={!isEditMode}
                            className="w-full bg-[#F9F9F9] border-0 text-gray-600 h-12 rounded-md"
                          />
                        )}
                      </div>
                    )
                  })}
                </div>

                <div className="flex gap-3 pt-7">
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="border border-[#002552] bg-white text-[#002552] hover:bg-gray-50 px-4 py-2 rounded-md font-medium text-sm h-auto"
                  >
                    Cancelar
                  </Button>
                  {isEditMode && (
                    <Button
                      onClick={onSubmit}
                      variant="default"
                      leftIcon={<img src={Save} className="h-4 w-4" />}
                      className="bg-[#4182F9] hover:bg-[#3670d9] text-white px-6 py-2 rounded-md font-medium text-sm h-auto"
                    >
                      Guardar
                    </Button>
                  )}
                </div>
              </>
            ) : (
              fields.map(field => {
                const colSpanClass =
                  field.colSpan === 1
                    ? 'col-span-1'
                    : field.colSpan === 2
                    ? 'col-span-2'
                    : field.colSpan === 3
                    ? 'col-span-3'
                    : ''

                return (
                  <div key={field.name} className={`space-y-1 ${colSpanClass}`}>
                    <Label className="text-sm font-semibold text-gray-900">
                      {field.label}{' '}
                      {isEditMode && field.required && <span className="text-red-500">*</span>}
                    </Label>

                    {field.type === 'select' ? (
                      <Select
                        value={getFieldValue(field.name)}
                        onValueChange={val => setFieldValue(field.name, val)}
                        disabled={!isEditMode}
                        fullWidth={true}
                      >
                        <SelectTrigger className="w-full bg-[#F9F9F9] border-0 text-gray-600 h-12 rounded-md">
                          <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : field.type === 'date' ? (
                      <DatePicker
                        value={getFieldValue(field.name)}
                        onChange={date => setFieldValue(field.name, date)}
                        placeholder={field.placeholder}
                        disabled={!isEditMode}
                      />
                    ) : (
                      <Input
                        type={field.type}
                        value={getFieldValue(field.name)}
                        onChange={e => setFieldValue(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        disabled={!isEditMode}
                        className="w-full bg-[#F9F9F9] border-0 text-gray-600 h-12 rounded-md"
                      />
                    )}
                  </div>
                )
              })
            )}
          </div>
        )}
      </div>

      {showFooter && !inlineButtons && (
        <div className="flex justify-end gap-3 px-4 py-6">
          <Button
            onClick={onClose}
            variant="outline"
            className="border border-[#002552] bg-white text-[#002552] hover:bg-gray-50 px-4 py-2 rounded-md font-medium text-sm h-auto"
          >
            Cancelar
          </Button>
          {isEditMode && (
            <Button
              onClick={onSubmit}
              variant="default"
              leftIcon={isPasswordModal ? undefined : <img src={Save} className="h-4 w-4" />}
              className="bg-[#4182F9] hover:bg-[#3670d9] text-white px-6 py-2 rounded-md font-medium text-sm h-auto"
            >
              {isPasswordModal ? 'Guardar Contraseña' : 'Guardar'}
            </Button>
          )}
        </div>
      )}
    </div>
  )

  if (isModal) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">{content}</div>
    )
  }

  return content
}
