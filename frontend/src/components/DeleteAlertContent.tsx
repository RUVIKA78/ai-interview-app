import React from 'react'

interface DeletAlertProps {
    content: string, onDelete: () => void
}

const DeleteAlertContent: React.FC<DeletAlertProps> = ({ content, onDelete }) => {
    return (
        <div className='p-5 '>
            <p className='text-[14px]'>{content}</p>

            <div className='flex justify-end mt-6'>
                <button type='button' className='btn-small' onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteAlertContent