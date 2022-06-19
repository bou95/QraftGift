import create from 'zustand'
const useStore = create ((set) => ({
    dir: 'ltr',
}))
export default useStore
