import React from 'react';

const AuthenticatedFooter = () => {
  return (
    <div className="small text-center text-black-50 p-3">
      { 'Icons made by ' }
      <a className="text-muted" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
      { ', ' }
      <a className="text-muted" href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a>
      { ' & ' }
      <a className="text-muted" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
    </div>
  );
};

export default AuthenticatedFooter;
