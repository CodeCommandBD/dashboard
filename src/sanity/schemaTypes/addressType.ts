import { HomeIcon } from 'lucide-react'

import { defineField, defineType } from 'sanity'

export const addressType = defineType({
    name: 'address',
    title: 'Addresses',
    type: 'document',
    icon: HomeIcon,
    fields: [
        defineField(
            {
                name: 'name',
                title: 'Address Name',
                type: 'string',
                description: 'A friendly name fro this address(e.g. Home, Work)',
                validation: (Rule) => Rule.required(),
            }
        ),
        defineField(
            {
                name: 'email',
                title: 'User Email',
                type: 'email',

            }
        ),
        defineField(
            {
                name: 'address',
                title: 'Street Address',
                type: 'string',
                description: 'The street address including apartment/unit number',
                validation: (Rule) => Rule.required().min(5).max(100)
            }
        ),
        defineField(
            {
                name: 'city',
                title: 'city',
                type: 'string',
                validation: (Rule) => Rule.required()
            }
        ),
        defineField(
            {
                name: 'state',
                title: 'State',
                type: 'string',
                description: 'Two letter state code (e.g. NY, CA',
                validation: (Rule) => Rule.required().length(2).uppercase()
            }
        ),
        defineField(
            {
                name: 'zip',
                title: 'ZIP/Postal Code',
                type: 'string',
                description: 'Enter your ZIP or Postal Code',
                validation: (Rule) =>
                    Rule.required()
                        .regex(/^[A-Za-z0-9\s\-]{3,10}$/, {
                            name: 'zipOrPostalCode',
                            invert: false,
                        })
                        .custom((zip) => {
                            if (!zip) {
                                return 'ZIP/Postal code is required';
                            }
                            if (!zip.match(/^[A-Za-z0-9\s\-]{3,10}$/)) {
                                return 'Please enter a valid ZIP/Postal code (3-10 characters, letters/numbers/dash/space allowed)';
                            }
                            return true;
                        }),
                
                        

            }
        ),

        defineField(
            {
                name: 'default',
                title: 'Default Address',
                type: 'boolean',
                description: 'Is this the default shipping address?',
                initialValue: false,
            }
        ),
        defineField(
            {
                name: 'createdAt',
                title: 'Created At',
                type: 'datetime',
                initialValue: ()=> new Date().toISOString(),
            }
        ),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle:'address',
            city:'city',
            state:'state',
            isDefault:'default',
        },
        prepare({ title, subtitle, city, state, isDefault}){
            return {
                title: `${title} ${isDefault ? "(Default)" : ""}`,
                subtitle:`${subtitle}, ${city}, ${state}`
            }
        }
    }

})