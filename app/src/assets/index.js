import arrow from './../assets/arrow.svg'
import arrowleft from './../assets/arrow-left.svg'
import symbol from './../assets/symbol.svg'
import plus from './../assets/plus.svg'
import eye from './../assets/eye.svg'
import enable from './../assets/enable.svg'
import disable from './../assets/disable.svg'
import minilist from './../assets/mini-list.svg'
import minisettings from './../assets/mini-settings.svg'
import _delete from './../assets/delete.svg'

import trash from './../assets/trash.svg'
import offon from './../assets/off-on.svg'
import settings from './../assets/settings.svg'
import list from './../assets/list.svg'

const COLORS = {
  red: {
    base: '#B51111',
    hover: '#9E0F0F',
    active: '#931010'
  },
  green: {
    base: '#11B570',
    hover: '#11AD6B',
    active: '#109F63'
  },
  blue: {
    base: '#1183B5',
    hover: '#0F7AA8',
    active: '#106E96'
  }
}

const ICONS = {
  arrow,
  arrowleft,
  symbol,
  plus,
  eye,
  disable,
  enable,
  delete: _delete,
  minilist,
  minisettings,
  trash,
  offon,
  list,
  settings
}

export {
  COLORS,
  ICONS
}
