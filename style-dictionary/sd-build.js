const StyleDictionary = require('style-dictionary').extend('./style-dictionary/sd-config.json');
const webRadius = require('./web/webRadius')

//Register transform for adding px and percentages where required
StyleDictionary.registerTransform({
    name: 'size/px',
    type: 'value',
    matcher : (token) => {
        return (token.unit === 'pixel' || token.type === 'dimension') & token.value !== 0
    },
    transformer : token => {
        return `${token.value}px`
    }
})

StyleDictionary.registerTransform({
    name: 'size/percent',
    type: 'value',
    matcher: token => {
        return token.unit === 'percent' & token.value !== 0
    },
    transformer: token => {
        return `${token.value}%`
    }
})

StyleDictionary.registerTransform({
    name: webRadius.name,
    type: webRadius.type,
    matcher: webRadius.matcher,
    transformer: webRadius.transformer
})

StyleDictionary.registerTransformGroup({
    name: "less",
    transforms: StyleDictionary.transformGroup["less"].concat(['size/px','size/percent','custom/radius'])
})

StyleDictionary.buildAllPlatforms();