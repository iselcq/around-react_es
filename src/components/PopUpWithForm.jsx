function PopupWithForm(props) {
  return (
    <div
      className={`${props.name} ${
        props.isOpen ? `${props.name}__opened` : " "
      }`}
    >
      <div className={`${props.name}__card`}>
        <button
          onClick={props.onCloseClick}
          className={`${props.name}__close`}
        ></button>
        <h3 className={`${props.name}__title`}>{`${props.title}`}</h3>
        <form name={`${props.name}__form`}>
          <fieldset className={`${props.name}__container`}>
            {props.children}
          </fieldset>
          <button
            type="submit"
            className={`${props.name}__submit ${props.name}__submit_disabled`}
          >
            {`${props.button}`}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
