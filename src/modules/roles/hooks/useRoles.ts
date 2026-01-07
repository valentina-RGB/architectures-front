import { rolesData } from "@/data/burnedDataTable"
import type { TableRow } from "@/interfaces/ui/tableProps.Interface"
import { useState } from "react"

export const useRoles = () => {
  const [roles, setRoles] = useState<TableRow[]>(rolesData)

  const handleRoleAdd = () => {
    console.log('Add role clicked')
  }

  const handleRoleDelete = (id: string) => {
    setRoles(prev => prev.filter(item => item.id !== id))
    console.log('Delete role:', id)
  }

  return {
    roles,
    handleRoleAdd,
    handleRoleDelete
  }

}