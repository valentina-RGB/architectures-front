export interface InfoCardField {
  label: string
  value: string
}

export interface InfoCardProps {
  title: string
  subtitle?: string
  fields: InfoCardField[]
  onEdit?: () => void
  showEditButton?: boolean
  className?: string
}
