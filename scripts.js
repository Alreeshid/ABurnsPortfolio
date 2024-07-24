const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

function MyButton() {
    return (
      <button>I'm a button</button>
    );
  }