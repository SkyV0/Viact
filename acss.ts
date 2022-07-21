/**
 * See {@link https://acss.io}
 */
const acss = {
	// For Animation
	'anim': 'animation',
	'anim-del': 'animation-delay',
	'animdel': 'animation-delay',
	'anim-dir': 'animation-direction',
	'animdir': 'animation-direction',
	'anim-dur': 'animation-duration',
	'animdur': 'animation-duration',
	'anim-end': 'animation-end',
	'animend': 'animation-end',
	'anim-it': 'animation-iteration-count',
	'animit': 'animation-iteration-count',
	'animic': 'animation-iteration-count',
	'anim-name': 'animation-name',
	'animname': 'animation-name',
	'animn': 'animation-name',
	'anim-ps': 'animation-play-state',
	'animps': 'animation-play-state',
	'anim-tf': 'animation-timing-function',
	'animtf': 'animation-timing-function',
	'anim-fm': 'animation-fill-mode',
	'animfm': 'animation-fill-mode',

	// For Appearance
	'ap': 'appearance',

	// For Border
	'bd': 'border',
	'bd-t': 'border-top',
	'bdt': 'border-top',
	'bd-r': 'border-right',
	'bdr': 'border-right',
	'bd-b': 'border-bottom',
	'bdb': 'border-bottom',
	'bd-l': 'border-left',
	'bdl': 'border-left',
	'bd-c': 'border-color',
	'bdc': 'border-color',
	'bd-tc': 'border-top-color',
	'bdtc': 'border-top-color',
	'bd-rc': 'border-right-color',
	'bdrc': 'border-right-color',
	'bd-bc': 'border-bottom-color',
	'bdbc': 'border-bottom-color',
	'bd-lc': 'border-left-color',
	'bdlc': 'border-left-color',
	'bd-sp': 'border-spacing',
	'bdsp': 'border-spacing',
	'bd-w': 'border-width',
	'bdw': 'border-width',
	'bd-tw': 'border-top-width',
	'bdtw': 'border-top-width',
	'bd-rw': 'border-right-width',
	'bdrw': 'border-right-width',
	'bd-bw': 'border-bottom-width',
	'bdbw': 'border-bottom-width',
	'bd-lw': 'border-left-width',
	'bdlw': 'border-left-width',
	'bd-s': 'border-style',
	'bds': 'border-style',
	'bd-ts': 'border-top-style',
	'bdts': 'border-top-style',
	'bd-rs': 'border-right-style',
	'bdrs': 'border-right-style',
	'bd-bs': 'border-bottom-style',
	'bdbs': 'border-bottom-style',
	'bd-ls': 'border-left-style',
	'bdls': 'border-left-style',
	'bd-i': 'border-image',
	'bd-is': 'border-image-source',
	'bdis': 'border-image-source',
	'bd-it': 'border-image-slice',
	'bd-ix': 'border-image-x',
	'bdix': 'border-image-x',
	'bd-iy': 'border-image-y',
	'bdiy': 'border-image-y',
	'bd-iw': 'border-image-width',
	'bdiw': 'border-image-width',
	'bd-ih': 'border-image-height',
	'bdih': 'border-image-height',
	'bd-ia': 'border-image-alt',
	'bdia': 'border-image-alt',
	'bd-ie': 'border-image-end',
	'bdie': 'border-image-end',
	'bd-col': 'border-collapse',
	'bdcol': 'border-collapse',

	// For Border Radius
	'radius': 'border-radius',
	'br': 'border-radius',
	'bd-radius': 'border-radius',
	'radius-tl': 'border-top-left-radius',
	'bdrtl': 'border-top-left-radius',
	'bdr-tl': 'border-top-left-radius',
	'brtl': 'border-top-left-radius',
	'br-tl': 'border-top-left-radius',
	'radius-tr': 'border-top-right-radius',
	'bdrtr': 'border-top-right-radius',
	'bdr-tr': 'border-top-right-radius',
	'brtr': 'border-top-right-radius',
	'br-tr': 'border-top-right-radius',
	'radius-br': 'border-bottom-right-radius',
	'bdrbr': 'border-bottom-right-radius',
	'bdr-br': 'border-bottom-right-radius',
	'brbr': 'border-bottom-right-radius',
	'br-br': 'border-bottom-right-radius',
	'radius-bl': 'border-bottom-left-radius',
	'bdrbl': 'border-bottom-left-radius',
	'bdr-bl': 'border-bottom-left-radius',
	'brbl': 'border-bottom-left-radius',
	'br-bl': 'border-bottom-left-radius',

	// for background
	'bg': 'background',
	'bg-color': 'background-color',
	'bgc': 'background-color',
	'bg-c': 'background-color',
	'bg-image': 'background-image',
	'bgi': 'background-image',
	'bg-i': 'background-image',
	'bg-position': 'background-position',
	'bgp': 'background-position',
	'bg-p': 'background-position',
	'bg-pos': 'background-position',
	'bgpos': 'background-position',
	'bg-py': 'background-position-y',
	'bgpy': 'background-position-y',
	'bg-px': 'background-position-x',
	'bgpx': 'background-position-x',
	'bg-repeat': 'background-repeat',
	'bgr': 'background-repeat',
	'bg-r': 'background-repeat',
	'bg-repeat-x': 'background-repeat-x',
	'bgrx': 'background-repeat-x',
	'bg-rx': 'background-repeat-x',
	'bg-repeat-y': 'background-repeat-y',
	'bgry': 'background-repeat-y',
	'bg-ry': 'background-repeat-y',
	'bg-size': 'background-size',
	'bgs': 'background-size',
	'bg-s': 'background-size',
	'bg-clip': 'background-clip',
	'bgcp': 'background-clip',
	'bg-cp': 'background-clip',
	'bg-origin': 'background-origin',
	'bgo': 'background-origin',
	'bg-o': 'background-origin',
	'bg-attachment': 'background-attachment',
	'bg-a': 'background-attachment',
	'bga': 'background-attachment',

	// For Box sizing
	'box-s': 'box-sizing',
	'bxz': 'box-sizing',

	// For Box shadow
	'b-shadow': 'box-shadow',
	'box-sh': 'box-shadow',
	'bxsh': 'box-shadow',
	'bxs': 'box-shadow',

	// for Clear
	'cl': 'clear',

	// For Color
	'c': 'color',

	// For Contain
	'ctn': 'contain',

	// For Content
	'cnt': 'content',

	// For Cursor
	'cur': 'cursor',

	// For Display
	'dis': 'display',
	'd': 'display',

	// For Filter
	'fil': 'filter',

	// For Flex
	'flx': 'flex',
	'fx': 'flex',
	'fl': 'flex',
	'flg': 'flex-grow',
	'fl-g': 'flex-grow',
	'fx-g': 'flex-grow',
	'fxg': 'flex-grow',
	'fls': 'flex-shrink',
	'flsh': 'flex-shrink',
	'fl-s': 'flex-shrink',
	'fl-sh': 'flex-shrink',
	'fx-s': 'flex-shrink',
	'fxs': 'flex-shrink',
	'fxsh': 'flex-shrink',
	'fl-b': 'flex-basis',
	'flb': 'flex-basis',
	'fx-b': 'flex-basis',
	'fxb': 'flex-basis',
	'as': 'align-self',
	'align-s': 'align-self',
	'fl-dir': 'flex-direction',
	'fl-d': 'flex-direction',
	'fld': 'flex-direction',
	'fldir': 'flex-direction',
	'fx-d': 'flex-direction',
	'fxd': 'flex-direction',
	'fxdir': 'flex-direction',
	'fl-f': 'flex-flow',
	'flf': 'flex-flow',
	'flfl': 'flex-flow',
	'fx-f': 'flex-flow',
	'fxf': 'flex-flow',
	'fxfl': 'flex-flow',
	'ai': 'align-items',
	'align-i': 'align-items',
	'ac': 'align-content',
	'align-c': 'align-content',
	'or': 'order',
	'ord': 'order',
	'js': 'justify-content',
	'justify-s': 'justify-content',
	'j-s': 'justify-content',
	'j-c': 'justify-content',
	'jc': 'justify-content',
	'flw': 'flex-wrap',
	'fl-w': 'flex-wrap',
	'fx-w': 'flex-wrap',
	'fxw': 'flex-wrap',

	// For Float
	'flo': 'float',

	// For Font
	'fnt': 'font',
	'f': 'font',
	'ff': 'font-family',
	'f-f': 'font-family',
	'fw': 'font-weight',
	'f-w': 'font-weight',
	'fs': 'font-size',
	'f-s': 'font-size',
	'fz': 'font-size',
	'f-st': 'font-style',
	'fst': 'font-style',
	'fv': 'font-variant',
	'f-v': 'font-variant',

	// For Width & Height
	'w': 'width',
	'h': 'height',
	'max-w': 'max-width',
	'maw': 'max-width',
	'mw': 'max-width',
	'min-w': 'min-width',
	'miw': 'min-width',
	'max-h': 'max-height',
	'mah': 'max-height',
	'mh': 'max-height',
	'min-h': 'min-height',
	'mih': 'min-height',

	// For Text
	'hy': 'hyphens',
	'lts': 'letter-spacing',
	'l-s': 'letter-spacing',
	'l-sp': 'letter-spacing',
	'lsp': 'letter-spacing',
	'letter-sp': 'letter-spacing',
	'w-sp': 'word-spacing',
	'wsp': 'word-spacing',
	'word-s': 'word-spacing',
	'text-tr': 'text-transform',
	't-tr': 'text-transform',
	'ttr': 'text-transform',
	'tt': 'text-transform',
	'text': 'text-align',
	'text-a': 'text-align',
	't-a': 'text-align',
	'ta': 'text-align',
	'text-l': 'text-align-last',
	'text-last': 'text-align-last',
	'text-al': 'text-align-last',
	't-l': 'text-align-last',
	't-al': 'text-align-last',
	'tal': 'text-align-last',
	'text-j': 'text-justify',
	't-j': 'text-justify',
	'tj': 'text-justify',
	'text-c': 'text-align-center',
	'white-s': 'white-space',
	'ws': 'white-space',
	'w-s': 'white-space',
	'whs': 'white-space',
	'whsc': 'white-space-collapse',
	'wh-sc': 'white-space-collapse',
	'wh-col': 'white-space-collapse',
	'text-w': 'text-wrap',
	't-w': 'text-wrap',
	'tw': 'text-wrap',
	'text-o': 'text-overflow',
	't-o': 'text-overflow',
	'to': 'text-overflow',
	'tov': 'text-overflow',
	'text-s': 'text-shadow',
	'text-sh': 'text-shadow',
	't-s': 'text-shadow',
	'ts': 'text-shadow',
	'tsh': 'text-shadow',
	'text-i': 'text-indent',
	't-i': 'text-indent',
	'ti': 'text-indent',
	'text-d': 'text-decoration',
	't-d': 'text-decoration',
	'td': 'text-decoration',
	'text-d-s': 'text-decoration-style',
	'text-ds': 'text-decoration-style',
	't-d-s': 'text-decoration-style',
	'td-s': 'text-decoration-style',
	'tds': 'text-decoration-style',
	'text-d-c': 'text-decoration-color',
	'text-dc': 'text-decoration-color',
	't-d-c': 'text-decoration-color',
	'td-c': 'text-decoration-color',
	'tdc': 'text-decoration-color',
	'text-d-w': 'text-decoration-width',
	'text-dw': 'text-decoration-width',
	't-d-w': 'text-decoration-width',
	'td-w': 'text-decoration-width',
	'tdw': 'text-decoration-width',
	'text-d-b': 'text-decoration-blink',
	'text-db': 'text-decoration-blink',
	't-d-b': 'text-decoration-blink',
	'td-b': 'text-decoration-blink',
	'tdb': 'text-decoration-blink',
	'text-d-i': 'text-decoration-indent',
	'text-di': 'text-decoration-indent',
	't-d-i': 'text-decoration-indent',
	'td-i': 'text-decoration-indent',
	'tdi': 'text-decoration-indent',
	'text-d-l': 'text-decoration-line',
	'text-dl': 'text-decoration-line',
	't-d-l': 'text-decoration-line',
	'td-l': 'text-decoration-line',
	'tdl': 'text-decoration-line',
	'text-d-t': 'text-decoration-thickness',
	'text-dt': 'text-decoration-thickness',
	't-d-t': 'text-decoration-thickness',
	'td-t': 'text-decoration-thickness',
	'tdt': 'text-decoration-thickness',
	'text-d-r': 'text-decoration-right',
	'text-dr': 'text-decoration-right',
	't-d-r': 'text-decoration-right',
	'td-r': 'text-decoration-right',
	'tdr': 'text-decoration-right',
	'lh': 'line-height',
	'l-h': 'line-height',
	'line-h': 'line-height',
	'tren': 'text-rendering',
	't-r': 'text-rendering',
	'text-r': 'text-rendering',
	'wb': 'word-break',
	'wob': 'word-break',
	'wow': 'word-wrap',
	'ww': 'word-wrap',
	'dir': 'direction',

	// For List style
	'ls': 'list-style',
	'list': 'list-style',
	'list-s': 'list-style',
	'list-style': 'list-style',
	'list-t': 'list-style-type',
	'list-type': 'list-style-type',
	'lst': 'list-style-type',
	'lsi': 'list-style-image',
	'list-i': 'list-style-image',
	'list-img': 'list-style-image',
	'lisp': 'list-style-position',
	'list-pos': 'list-style-position',
	'lsr': 'list-style-repeat',
	'list-r': 'list-style-repeat',
	'list-rep': 'list-style-repeat',
	'lr': 'list-style-repeat',
	'lsb': 'list-style-border',
	'list-b': 'list-style-border',
	'list-border': 'list-style-border',
	'lb': 'list-style-border',
	'list-b-s': 'list-style-border-style',
	'list-b-st': 'list-style-border-style',
	'lb-s': 'list-style-border-style',
	'lb-st': 'list-style-border-style',
	'list-b-w': 'list-style-border-width',
	'list-bw': 'list-style-border-width',
	'list-bwi': 'list-style-border-width',
	'list-b-wi': 'list-style-border-width',
	'lb-w': 'list-style-border-width',
	'lb-wi': 'list-style-border-width',
	'list-b-c': 'list-style-border-color',
	'list-b-co': 'list-style-border-color',
	'lb-c': 'list-style-border-color',
	'lb-co': 'list-style-border-color',
	'lisi': 'list-style-image',
	'list-b-i': 'list-style-image',
	'list-b-im': 'list-style-image',
	'lb-i': 'list-style-image',
	'lb-im': 'list-style-image',
	'list-b-r': 'list-style-repeat',
	'list-b-re': 'list-style-repeat',
	'lb-r': 'list-style-repeat',
	'lb-re': 'list-style-repeat',
	'list-b-p': 'list-style-position',
	'list-b-po': 'list-style-position',
	'lb-p': 'list-style-position',
	'lb-po': 'list-style-position',
	'list-b-t': 'list-style-type',
	'list-b-ty': 'list-style-type',
	'lb-t': 'list-style-type',
	'lb-ty': 'list-style-type',

	// for margin & padding
	'm': 'margin',
	'mx': 'margin-x',
	'my': 'margin-y',
	'mt': 'margin-top',
	'mr': 'margin-right',
	'mb': 'margin-bottom',
	'ml': 'margin-left',
	'p': 'padding',
	'px': 'padding-x',
	'py': 'padding-y',
	'pt': 'padding-top',
	'pr': 'padding-right',
	'pb': 'padding-bottom',
	'pl': 'padding-left',

	// For Object fit
	'of': 'object-fit',
	'object-f': 'object-fit',
	'objf': 'object-fit',

	// For Outline
	'o': 'outline',
	'out': 'outline',

	// For Position
	'pos': 'position',
	't': 'top',
	'r': 'right',
	'b': 'bottom',
	'l': 'left',
	'z': 'z-index',
	'zi': 'z-index',

	// For Opacity
	'op': 'opacity',
	'opac': 'opacity',

	// For Overflow
	'ov': 'overflow',
	'over': 'overflow',
	'ov-x': 'overflow-x',
	'ovx': 'overflow-x',
	'over-x': 'overflow-x',
	'ov-y': 'overflow-y',
	'ovy': 'overflow-y',
	'over-y': 'overflow-y',

	// For Pointer events
	'pe': 'pointer-events',
	'pointer': 'pointer-events',

	// For Resize
	'res': 'resize',
	'rsz': 'resize',
	'res-x': 'resize-x',
	'rsz-x': 'resize-x',
	'res-y': 'resize-y',
	'rsz-y': 'resize-y',
	'res-xy': 'resize-both',
	'rsz-xy': 'resize-both',
	'res-b': 'resize-both',
	'rsz-b': 'resize-both',

	// For Transform
	'tr': 'transform',
	'trf': 'transform',
	'trfo': 'transform-origin',
	'tr-o': 'transform-origin',
	'tr-or': 'transform-origin',
	'tro': 'transform-origin',
	'trfs': 'transform-style',
	'tr-s': 'transform-style',
	'prs': 'perspective',
	'prs-x': 'perspective-x',
	'prs-y': 'perspective-y',
	'prs-z': 'perspective-z',
	'prs-xy': 'perspective-xy',
	'prs-xz': 'perspective-xz',
	'prs-yz': 'perspective-yz',
	'prs-xyz': 'perspective-xyz',
	'prs-3d': 'perspective-3d',
	'prso': 'perspective-origin',
	'prs-o': 'perspective-origin',
	'prs-or': 'perspective-origin',
	'bfv': 'backface-visibility',
	'bf-v': 'backface-visibility',
	'bf-vis': 'backface-visibility',
	'bf-visible': 'backface-visibility',

	// For Transition
	'trs': 'transition',
	'trs-d': 'transition-delay',
	'trs-dly': 'transition-delay',
	'trsde': 'transition-delay',
	'trsdu': 'transition-duration',
	'trs-du': 'transition-duration',
	'trsdur': 'transition-duration',
	'trs-prop': 'transition-property',
	'trs-pr': 'transition-property',
	'trsp': 'transition-property',
	'trstf': 'transition-timing-function',
	'trs-tf': 'transition-timing-function',
	'trs-tfm': 'transition-timing-function',

	// For User Select
	'us': 'user-select',

	// For Vertical align
	'vert': 'vertical-align',
	'va': 'vertical-align',

	// For Visibility
	'v': 'visibility',
	'vis': 'visibility',

	// For SVG
	'fill': 'fill',
	'stk': 'stroke',
	'str': 'stroke',
	'stkw': 'stroke-width',
	'stk-w': 'stroke-width',
	'str-w': 'stroke-width',
	'strw': 'stroke-width',
	'stklj': 'stroke-linecap',
	'stk-lj': 'stroke-linecap',
	'str-lj': 'stroke-linecap',
	'strlj': 'stroke-linecap',
};

export default acss;
