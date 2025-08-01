import React from 'react'
import {  LuTrash } from 'react-icons/lu'
import { getInitials } from '../../utils/helper'
import type { QuestionType } from '../../utils/types'

interface colorType{
    id:number, bgcolor:string
}
interface SummaryCardProps {
    
    colors:colorType,
    role: string,
    topicToFocus: string,
    experience: number,
     questions?:QuestionType[],
    description: string,
    lastUpdated: string,
    onSelect: () => void,
    onDelete: () => void,
}
const SummaryCard: React.FC<SummaryCardProps> = ({
    
    colors,
    role,
    topicToFocus,
    experience,
    questions,
    description,
    lastUpdated,
    onSelect,
    onDelete,

}) => {
    return (
        <div className='bg-white border border-gray-300/40 rounded-xl p-2 overflow-hidden cursor-pointer hover:shadow-xl shadow-gray-100 relative group'
            onClick={onSelect}
        >
            <div className='rounded-lg p-4 cursor-pointer relative'
                style={{ background: colors.bgcolor }}
            >
                <div className='flex items-start'>
                    <div className='flex-shrink w-12 h-12 bg-white rounded-md flex items-center justify-center mr-4'>
                        <span className='text-lg font-semibold text-black'>
                            {getInitials(role)}
                        </span>
                    </div>


                    <div className='flex-grow '>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className='text-xl font-medium'>{role}</p>
                                <p className='text-lg font-medium text-gray-900'>{topicToFocus}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <button
                className='hidden group-hover:flex items-center gap-2 text-rose-500 text-xs font-medium bg-rose-50 px-3 py-1 rounded text-nowrap border border-rose-100 hover:border-rose-200 cursor-pointer absolute top-0 right-0'
                onClick={(e) => {
                    e.stopPropagation()
                    onDelete()
                }}>
                    <LuTrash/>
                </button>
            </div>

            <div className='px-3 pb-3'>
                <div className='flex items-center gap-3 mt-4'> 
                    <div className='text-sm font-medium text-black px-3 py-1 border-[0.5px] border-gray-900 rounded-full'>
                        Experience: {experience} {experience == 1 ? "Year" : "Years"}
                    </div>

                    <div className='text-sm font-medium text-black px-3 py-1 border-[0.5px] border-gray-900 rounded-full'>
                        {questions?.length} Q&A
                    </div>

                    <div className='text-sm font-medium text-black px-3 py-1 border-[0.5px] border-gray-900 rounded-full'>
                        Last Updated: {lastUpdated}
                    </div>
                </div>

                <p className=''>{description}</p>
            </div>
        </div>
    )
}

export default SummaryCard