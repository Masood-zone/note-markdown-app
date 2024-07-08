import { mockNoteInfo } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (mockNoteInfo.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No notes found</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {mockNoteInfo.map((note) => {
        return <NotePreview key={note.title + note.lastEditTime} {...note} />
      })}
    </ul>
  )
}
