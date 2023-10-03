"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.convertJsonToMarkdown = void 0;
var tableSeparator = '|';
function convertJsonToMarkdown(jsonItems, filter) {
    var result = [];
    var filteredItems = jsonItems.filter(function (_a) {
        var name = _a.name;
        return name.match(filter);
    });
    var displaySection = function (stringArray, sectionString) {
        var res = stringArray;
        if (res.length) {
            result.push(sectionString);
            result.push.apply(result, res);
        }
    };
    var interfaces = getInterfaces(filteredItems), types = getTypes(filteredItems), classes = getClass(filteredItems), typeAlias = getTypeAlias(filteredItems), variables = getVariables(filteredItems);
    // Create Table
    result.push.apply(result, __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], ((interfaces === null || interfaces === void 0 ? void 0 : interfaces.length) ? ["* [**Interfaces**](#interfaces)"] : []), false), ((types === null || types === void 0 ? void 0 : types.length) ? ["* [**Types**](#types)"] : []), false), ((classes === null || classes === void 0 ? void 0 : classes.length) ? ["* [**Classes**](#classes)"] : []), false), ((typeAlias === null || typeAlias === void 0 ? void 0 : typeAlias.length) ? ["* [**Type alias**](#type-alias)"] : []), false), ((variables === null || variables === void 0 ? void 0 : variables.length) ? ["* [**Variables**](#variables)"] : []), false));
    displaySection(interfaces, "\n## Interfaces");
    displaySection(types, "\n## Types");
    displaySection(classes, "\n## Classes");
    displaySection(typeAlias, "\n## Type alias");
    displaySection(variables, "\n## Variables");
    return result.join('\n');
}
exports.convertJsonToMarkdown = convertJsonToMarkdown;
function getInterfaces(filteredJSON) {
    var res = [];
    filteredJSON.filter(function (_a) {
        var filteredString = _a.kindString, filteredChildren = _a.children;
        return filteredString === 'Interface'
            && typeof filteredChildren !== 'undefined';
    }).forEach(function (_a) {
        var _b, _c, _d, _e;
        var name = _a.name, children = _a.children;
        res.push("\n### ".concat(name));
        // Find default values
        var defaultValues = {};
        (_e = (_d = (_c = (_b = filteredJSON.find(function (_a) {
            var defaultString = _a.kindString, defaultName = _a.name;
            return defaultString === 'Variable'
                && defaultName.toLowerCase() === "".concat(name.toLowerCase(), "defaultdoc");
        })) === null || _b === void 0 ? void 0 : _b.type) === null || _c === void 0 ? void 0 : _c.declaration) === null || _d === void 0 ? void 0 : _d.children) === null || _e === void 0 ? void 0 : _e.forEach(function (_a) {
            var name = _a.name, defaultValue = _a.defaultValue;
            defaultValues[name] = defaultValue;
        });
        res.push(tableSeparator + ['name', 'Type', 'Required', 'Default', 'Description'].join(" ".concat(tableSeparator, " ")) + tableSeparator);
        res.push(tableSeparator + ['---', '---', ':---:', '---', '---'].join("".concat(tableSeparator)) + tableSeparator);
        children.forEach(function (_a) {
            var _b, _c, _d;
            var name = _a.name, type = _a.type, signatures = _a.signatures, flags = _a.flags, comment = _a.comment;
            var commentString = ((_c = (comment || (signatures && ((_b = signatures[0]) === null || _b === void 0 ? void 0 : _b.comment)))) === null || _c === void 0 ? void 0 : _c.shortText) || '';
            res.push(tableSeparator + [
                "**`".concat(name, "`**"),
                type ? printType(type) : printType((_d = signatures[0]) === null || _d === void 0 ? void 0 : _d.type),
                !flags.isOptional ? '✴️' : '',
                defaultValues[name] ? "`".concat(defaultValues[name], "`") : '',
                commentString.replace(/\n/g, '')
            ].join(" ".concat(tableSeparator, " ")) + tableSeparator);
        });
    });
    return res;
}
function getTypes(filteredJSON) {
    var res = [];
    filteredJSON.filter(function (item) { return item.kindString === 'Enumeration'; }).forEach(function (enumeration) {
        res.push("\n### ".concat(enumeration.name));
        res.push("|  |\n|:---:|");
        if (enumeration.children) {
            res.push(enumeration.children.map(function (property) { return "| `".concat(property.name, "` |"); }).join('\n'));
        }
    });
    return res;
}
function getClass(filteredJSON) {
    var res = [];
    filteredJSON.filter(function (item) { return item.kindString === 'Class'; }).forEach(function (_a) {
        var className = _a.name, classComment = _a.comment, classChildren = _a.children;
        res.push("\n### ".concat(className));
        var comments = classComment === null || classComment === void 0 ? void 0 : classComment.shortText;
        if (comments) {
            res.push("_".concat(comments.replace(/\n/gmi, '_\n_'), "_\n"));
        }
        // Methods
        var methods = classChildren === null || classChildren === void 0 ? void 0 : classChildren.filter(function (item) { return item.kindString === 'Method'; });
        if (typeof methods !== 'undefined' && methods.length) {
            res.push("#### Methods");
            methods.forEach(function (_a) {
                var methodSignatures = _a.signatures, methodName = _a.name;
                var _b = methodSignatures[0], signatureParameters = _b.signatureParameters, signatureType = _b.signatureType, signatureComment = _b.signatureComment;
                var params = [];
                var parameterSection = [];
                if (signatureParameters && signatureParameters.length) {
                    parameterSection.push("Name | Type | Description \n---|---|---");
                    signatureParameters === null || signatureParameters === void 0 ? void 0 : signatureParameters.map(function (_a) {
                        var paramName = _a.name, paramType = _a.type, paramComment = _a.comment;
                        params.push("`".concat(paramName, "`: ").concat(printType(paramType)));
                        parameterSection.push("**".concat(paramName, "** | ").concat(printType(paramType), " | ").concat(paramComment === null || paramComment === void 0 ? void 0 : paramComment.shortText));
                    });
                }
                res.push("> **".concat(methodName, "**(").concat((params || ['']).join(','), ") => ").concat(printType(signatureType), "\n"));
                var comments = signatureComment === null || signatureComment === void 0 ? void 0 : signatureComment.shortText;
                if (comments) {
                    res.push("_".concat(comments.replace(/\n/gmi, '_\n_'), "_\n"));
                }
                res.push("".concat((parameterSection || ['']).join('\n')));
            });
        }
    });
    return res;
}
function getTypeAlias(filteredJSON) {
    var res = [];
    filteredJSON.filter(function (_a) {
        var itemString = _a.kindString, itemType = _a.type;
        return itemString === 'Type alias'
            && itemType.type !== 'template-literal';
    }).forEach(function (_a) {
        var _b;
        var typeAliasName = _a.name, typeAliasComment = _a.comment, typeAliasType = _a.type, typeAliasTypeParameter = _a.typeParameter;
        res.push("\n### ".concat(typeAliasName));
        if (typeAliasComment) {
            res.push("\n".concat(typeAliasComment === null || typeAliasComment === void 0 ? void 0 : typeAliasComment.shortText));
        }
        switch (typeAliasType.type) {
            case 'reference':
                (_b = ((typeAliasTypeParameter || typeAliasType.typeArguments))) === null || _b === void 0 ? void 0 : _b.map(function (typeParameter) {
                    res.push("\n> - ".concat(printType(typeParameter) !== '_unknown_' ?
                        printType(typeParameter) :
                        printType(typeParameter.type)));
                });
                break;
            case 'union':
                typeAliasType.types.forEach(function (typeVariant) {
                    res.push("\n> - ".concat(printType(typeVariant)));
                });
                break;
        }
    });
    filteredJSON.filter(function (item) {
        var _a;
        return item.kindString === 'Interface'
            && typeof item.extendedTypes !== 'undefined'
            && ((_a = item.extendedTypes[0]) === null || _a === void 0 ? void 0 : _a.type) === 'reference';
    }).forEach(function (_a) {
        var typeAliasName = _a.name, typeAliasExtendedTypes = _a.extendedTypes;
        res.push("\n### ".concat(typeAliasName));
        res.push("\n> _Based on ".concat(printType(typeAliasExtendedTypes[0]), "_"));
    });
    return res;
}
function getVariables(filteredJSON) {
    var res = [];
    filteredJSON
        .filter(function (_a) {
        var itemString = _a.kindString, itemType = _a.type;
        return itemString === 'Variable' && itemType.type !== 'array' && itemType.type !== 'reflection';
    })
        .forEach(function (_a) {
        var variableName = _a.name, variableType = _a.type;
        res.push("\n### ".concat(variableName));
        res.push("".concat(printType(variableType)));
    });
    return res;
}
function printType(typeObject) {
    var getTypeValue = function (tObj) { return typeof tObj.name !== 'undefined' ? "".concat(tObj.name) : "".concat(tObj.value); };
    if (typeObject && typeObject.type) {
        switch (typeObject.type) {
            case 'intrinsic':
            case 'literal':
                return "_".concat(getTypeValue(typeObject), "_");
            case 'reference':
                return "`".concat(typeObject.name, "`");
            case 'union':
                return typeObject.types.map(function (tObj) { return "`".concat(getTypeValue(tObj), "`"); }).join(' \\| ');
        }
    }
    return '_unknown_';
}
