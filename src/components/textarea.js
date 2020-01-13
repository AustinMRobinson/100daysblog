function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const FloatingLabelInput = styled.div`
  width: 100%;
  display: block;
  margin: -1.5rem 0 3rem 0;
`;
const FloatingLabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  height: auto;
  font-size: inherit;
  margin: 0;
`;
const FloatingLabel = styled.label`
  padding: 16px;
  margin: 0;
  border: 0;
  position: absolute;
  color: var(--foreground2);
  top: 0;
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  font-size: 1em;
  cursor: text;
  pointer-events: none;
  width: 66.6%;
  transform: ${props => props.active ? 'translate3d(0, -10%, 0) scale(0.70)' : 'none'};
`;
const FloatingInput = styled.textarea`
  padding: 16px;
  border-radius: 8px;
  margin: 0;
  border: none;
  outline: none;
  font-size: 1em;
  color: var(--foreground0);
  background: var(--bg1);
  padding: ${props => props.active ? '24px 12px 8px 12px' : '16px'};
  min-height: 5rem;
  &:focus {
    box-shadow: inset 0 0 0 2px var(--accent);
    }
  &::placeholder {
    color: var(--foreground3);
    opacity: ${props => props.active ? 1 : 0};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`;
class TextArea extends React.PureComponent {
  constructor(props) {
    super(props);

    if (!props.id && !props.name) {
      throw new Error('expected id but none present');
    }

    this.state = {
      active: props.value && props.value.length > 0
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus(event) {
    this.setState({
      active: true
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onBlur(event) {
    this.setState({
      active: event.target.value.length !== 0
    });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  render() {
    const {
      id,
      label,
      onBlur,
      onFocus,
      type,
      refs,
      className,
      ...otherProps
    } = this.props;
    const {
      active
    } = this.state;
    return React.createElement(FloatingLabelInput, null, React.createElement(FloatingLabelInputContainer, {
      className: className
    }, React.createElement(FloatingLabel, {
      className: className,
      htmlFor: id,
      active: active
    }, label), React.createElement(FloatingInput, _extends({
      active: active,
      className: className,
      id: id,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      ref: refs,
      type: type,
    }, otherProps))));
  }

}

module.exports = TextArea;
