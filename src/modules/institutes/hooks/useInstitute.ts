import { instituteData } from "@/data/burnedDataTable"
import type { TableRow } from "@/interfaces/ui/tableProps.Interface"
import { useState } from "react"

export const useInstitute = () => {
      const [institutes, setInstitutes] = useState<TableRow[]>(instituteData)
    
      const handleInstituteAdd = () => {
        console.log('Add institute clicked')
      }
    
      const handleInstituteView = (id: string) => {
        console.log('View institute:', id)
      }
    
      const handleInstituteEdit = (id: string) => {
        console.log('Edit institute:', id)
      }
    
      const handleInstituteFilter = (id: string) => {
        console.log('Filter institute:', id)
      }
    
      const handleInstituteDelete = (id: string) => {
        setInstitutes(prev => prev.filter(item => item.id !== id))
        console.log('Delete institute:', id)
      }
    
      const handleInstituteStatusChange = (id: string, status: boolean) => {
        setInstitutes(prev => prev.map(item => (item.id === id ? { ...item, status } : item)))
      }
    
      return {
        institutes,
        handleInstituteAdd,
        handleInstituteView,
        handleInstituteEdit,
        handleInstituteFilter,
        handleInstituteDelete,
        handleInstituteStatusChange
      }
}