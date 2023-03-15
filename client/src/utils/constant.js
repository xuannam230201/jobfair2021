export const PINK_BG = '#F7C8E0'
export const DARK_BLUE = '#336699'
export const BLUE_BG = '#B4E4FF'
export function isOrganizer(itemData) {
  return (
    itemData.surname === itemData.surname.toUpperCase() &&
    !itemData.id.includes('TN')
  )
}

export const stringName = (item) => {
  return isOrganizer(item)
    ? item.id +
        (item.surname === '' ? '' : ' - ') +
        item.surname +
        ' ' +
        item.firstname +
        ' [BTC]'
    : item.id +
        (item.surname === '' ? '' : ' - ') +
        item.surname +
        ' ' +
        item.firstname
}
