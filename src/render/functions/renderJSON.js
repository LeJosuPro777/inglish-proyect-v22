export default function renderJSON (JSONContent) {
    if (location.href.includes("01"))
    return JSONContent.uno;
  if (location.href.includes("02"))
    return JSONContent.dos;
  if (location.href.includes("03"))
    return JSONContent.tres;
  if (location.href.includes("04"))
    return JSONContent.cuatro;
  if (location.href.includes("05"))
    return JSONContent.cinco;
  if (location.href.includes("06"))
    return JSONContent.seis;
  if (location.href.includes("07"))
    return JSONContent.siete;
  if (location.href.includes("08"))
    return JSONContent.ocho;
  if (location.href.includes("09"))
    return JSONContent.nueve;
  if (location.href.includes("10"))
    return JSONContent.diez;
}
