import css from './CafeInfo.module.css';

// Крок 2. Компонент CafeInfo

// Створи компонент із назвою та коротким описом кав’ярні. Він має створювати таку розмітку:

// <div className={css.container}>
//   <h1 className={css.title}>Sip Happens Café</h1>
//   <p className={css.description}>
//     Please rate our service by selecting one of the options below.
//   </p>
// </div>

// Додай його до App.

function CafeInfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
}



export default CafeInfo;
