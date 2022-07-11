const StyleDictionary = require('style-dictionary').extend('./style-dictionary/sd-config.json');

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

//Transform for adding px to radius tokens
StyleDictionary.registerTransform({
    name: 'radii/px',
    type: 'value',
    matcher: function(token){
        return token.attributes.category === 'radii' && token.value != 0;
    },
    transformer: function(token){
        return `${token.value}px`;
    }
})

StyleDictionary.registerTransformGroup({
    name: "less",
    transforms: StyleDictionary.transformGroup["less"].concat(['radii/px', 'size/px','size/percent'])
})

StyleDictionary.buildAllPlatforms();