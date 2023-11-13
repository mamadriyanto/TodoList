import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleCharLimit: 50,
      titleCharRemaining: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  limitTitleChar(value, max) {
    if (value.length > max) {
      value = value.substring(0, max);
    }
    let remaining = max - value.length;

    return {
      value,
      remaining,
    };
  }

  onTitleChangeEventHandler(event) {
    const titleLimit = this.limitTitleChar(
      event.target.value,
      this.state.titleCharLimit
    );

    this.setState((prevState) => {
      return {
        ...prevState,
        title: titleLimit.value,
        titleCharRemaining: titleLimit.remaining,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    if (this.state.title.length === 0 || this.state.body.length === 0) {
      alert("Judul dan isi catatan harus diisi");
    } else {
      this.props.addNote(this.state);
    }
  }

  onResetEventHandler(event) {
    event.preventDefault();
    this.setState({
      title: "",
      body: "",
      titleCharLimit: 50,
      titleCharRemaining: 50,
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form
          onSubmit={this.onSubmitEventHandler}
          onReset={this.onResetEventHandler}
        >
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.titleCharRemaining}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu disini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <div className="note-input__action">
            <button type="submit" className="note-input__action-submit">
              Buat
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NotesInput;
