//Register validation
export const INCORRECT_EMAIL_FORMAT = "Helytelen e-mail formátum.";
export const USERNAME_TOO_SHORT =
  "A felhasználónévnek legalább 5 karakterből kell állnia.";
export const USERNAME_CONTAINS_FORBIDDEN =
  "A felhasználónévben nem megengedett karakter szerepel.";
export const PASSWORD_TOO_SHORT =
  "A jelszónak legalább 8 karakterből kell állnia.";
export const PASSWORD_TOO_LONG = "A jelszó legfeljebb 20 karakterből állhat.";
export const USERNAME_TAKEN = "Ez a felhasználónév már foglalt.";
export const UNKNOWN_ERROR_SERVER = "Ismeretlen hiba történt a szerveren.";

//Login validation
export const USER_NOT_FOUND = "Nincsen ilyen felhasználó.";
export const INCORRECT_PASSWORD = "Helytelen jelszó.";
export const USER_BANNED = "Ez a felhasználó le van tiltva.";

//Contact validation
export const INCORRECT_PHONE_FORMAT = "Helytelen telefonszám formátum.";
export const INCORRECT_PHONE_LENGTH = "Helytelen telefonszám hossz.";

//Ad types
export type Wear =
  | "Erősen használt"
  | "Használt"
  | "Megkímélt"
  | "Újszerű"
  | "Új";
export type MainCategory =
  | "OTTHON"
  | "SZAMTECH"
  | "MUSZAKI"
  | "RUHAZAT"
  | "JARMU"
  | "SZABADIDO"
  | "INGATLAN";

//Ad validation
export const PRICE_TOO_LOW = "Az ár túl alacsony.";
export const PRICE_TOO_HIGH = "Az ár túl magas.";
export const TITLE_TOO_SHORT = "A címnek legalább 5 karakterből kell állnia.";
export const TITLE_TOO_LONG = "A cím legfeljebb 60 karakterből állhat.";

//Ad misc.
export const AD_NOT_FOUND = "Hirdetés nem található.";
