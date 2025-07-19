 import { TagIcon } from 'lucide-react'

import {defineType} from 'sanity'

 export const categoryType = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: TagIcon,
    fields: [
        {
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'slug',
            type:'slug',
            options:{
                source:'title',
                maxLength:96
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name:'description',
            type:'text'
        },
        {
            name:'range',
            type:'number',
            description:'Starting from',
        },
        {
            name:'featured',
            type:'boolean',
            initialValue:false,
        },
        {
            name:'image',
            title:'Category Image',
            type:'image',
            options:{
                hotspot:true,
            }
        }
    ],
    preview:{
        select:{
            title:'title',
            subtitle:'description',
            media:'image'
        }
    }

 })