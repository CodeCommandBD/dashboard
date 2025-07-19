import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressType'
import { authorType } from './authorType'
import { blogCategoryType } from './blogCategoryType'
import { blogType } from './blogType'
import { brandType } from './brandType'
import { blockContentType } from './blockContentType'
import { productType } from './productType'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blockContentType,
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
  ],
}
