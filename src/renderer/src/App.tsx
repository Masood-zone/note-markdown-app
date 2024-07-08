import {
  ActionButtonRow,
  Content,
  DraggableBar,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'

const App = () => {
  return (
    <>
      <DraggableBar />
      <RootLayout>
        <Sidebar>
          <ActionButtonRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1 " />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <h1>Content</h1>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
