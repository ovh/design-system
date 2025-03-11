# TODO

- Tree-shaking on webpack consuming app still doesn't works => works on production mode
- Test if postCSS autoprefixer is applied already

## TBD

- Do we propose css only prop? (like resizable on textarea?)
- Do we still limit props like label instead of any node (link, button, ...)?
- Do we expose ref?
- External lib (like datepicker)?
- Do we keep commonJS version?

### Controlled vs Uncontrolled (or both?)?

#### Controlled

+ more classic
+ easier to use, especially with form framework
+ less time to implement and maintain

- need more configuration
- less performant (rerender on every key typed)
- cannot provide methods
- integrators needs to implement some behaviour each time (ex: clearable button)

#### Uncontrolled

+ less configuration
+ more performant
+ we can provide internal behaviour (ex clearable button)

- less simple to use by users (as integrators needs to know the difference and what they're doing)
- takes a bit more time to implement and maintain for ODS

#### Both?

We can provide both by checking if integrator pass a `value` (controlled) prop or not (uncontrolled)

+ can do both scenario

- way more prone to integrator errors
- more complex to understand
- takes way more time to implement and maintain for ODS

### React version

Which one do we require as minimal peer-dependency? (+prop-types?)
Currently ODS requires:
```
"react": ">=16.8.6",
"react-dom": ">=16.8.6"
```
Shall we bump this to 18.x

### Node version

ODS is currently running on NodeJS v18.x

Manager recently bumped into v22, shall we do the same while updating the whole app?
