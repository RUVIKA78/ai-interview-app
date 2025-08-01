import  { type ReactElement } from 'react'
import { RiCloseLargeFill } from "react-icons/ri";
interface ModalProps {
  children: ReactElement
  isOpen: boolean,
  onClose: ()=>void
  title: string,
  hideHeader: boolean
}
const Modal = ({ children, isOpen, onClose, title, hideHeader }: ModalProps) => {

  if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40'>


      <div className={`relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden`}>

        {!hideHeader && (
          <div className='flex items-center justify-between p-4 border border-gray-200 '>
            <h3 className='md:text-3xl font-medium text-gray-900'>{title}</h3>
          </div>
        )}

        <button
          type='button'
          onClick={onClose}
          className='text-gray-400 bg-transparent hover:bg-orange-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center absolute top-3.5 right-3.5 cursor-pointer '
        >
          <RiCloseLargeFill className='w-4 h-4 font-bold' />
        </button>
        <div className='flex-1 overflow-y-auto custom-scrollbar'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal