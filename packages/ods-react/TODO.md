# TODO

- Tree-shaking on webpack consuming app still doesn't works
- Test if postCSS autoprefixer is applied already

## React version

Which one do we require as minimal peer-dependency? (+prop-types?)
Currently ODS requires:
```
"react": ">=16.8.6",
"react-dom": ">=16.8.6"
```
Shall we bump this to 18.x

## Node version

ODS is currently running on NodeJS v18.x

Manager recently bumped into v22, shall we do the same while upadting the whole app?
