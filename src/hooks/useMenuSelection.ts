import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'sundown_selected_menu_items'

export function useMenuSelection() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => {
    // Initialize from localStorage on mount
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const ids = JSON.parse(stored) as string[]
        return new Set(ids)
      }
    } catch (error) {
      console.error('Error loading selections from localStorage:', error)
    }
    return new Set<string>()
  })

  // Sync to localStorage whenever selectedIds changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(selectedIds)))
    } catch (error) {
      console.error('Error saving selections to localStorage:', error)
    }
  }, [selectedIds])

  const toggleItem = useCallback((itemId: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(itemId)) {
        next.delete(itemId)
      } else {
        next.add(itemId)
      }
      return next
    })
  }, [])

  const clearAll = useCallback(() => {
    setSelectedIds(new Set<string>())
  }, [])

  const isSelected = useCallback(
    (itemId: string) => {
      return selectedIds.has(itemId)
    },
    [selectedIds]
  )

  return {
    selectedIds,
    toggleItem,
    clearAll,
    isSelected,
    selectedCount: selectedIds.size,
  }
}
