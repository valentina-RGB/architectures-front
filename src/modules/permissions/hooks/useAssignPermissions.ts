import { assignPermissionsData } from "@/data/burnedDataTable"
import type { TableRow } from "@/interfaces/ui/tableProps.Interface"
import { useState } from "react"

export const useAssignPermissions = () => {
     const [assignPermissions, setAssignPermissions] = useState<TableRow[]>(assignPermissionsData)
    
      const handleAssignPermissionsAdd = () => {
        console.log('Add assign permissions clicked')
      }
    
      const handleAssignPermissionsView = (id: string) => {
        console.log('View assign permissions:', id)
      }
    
      const handleAssignPermissionsEdit = (id: string) => {
        console.log('Edit assign permissions:', id)
      }
    
      const handleAssignPermissionsFilter = (id: string) => {
        console.log('Filter assign permissions:', id)
      }
    
      const handleAssignPermissionsDelete = (id: string) => {
        setAssignPermissions(prev => prev.filter(item => item.id !== id))
        console.log('Delete assign permissions:', id)
      }
    
      const handleAssignPermissionsStatusChange = (id: string, status: boolean) => {
        setAssignPermissions(prev => prev.map(item => (item.id === id ? { ...item, status } : item)))
      }

    return {
        assignPermissions,
        handleAssignPermissionsAdd,
        handleAssignPermissionsView,
        handleAssignPermissionsEdit,
        handleAssignPermissionsFilter,
        handleAssignPermissionsDelete,
        handleAssignPermissionsStatusChange
    }
    
}