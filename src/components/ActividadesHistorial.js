import { h } from "vue";
import Actividad from "./Actividad";

export default function ActividadesHistorial(props) {
  return h(
    "div",
    { class: "bg-light borderRadius" },
    h(
      "div",
      { class: "bg-light borderRadius" },
      h("h1", "Historial de actividades")
    ),
    h(
      "div",
      { class: "m-0 overflow-auto row w-100", style: "max-height: 470px;" },
      [
        h(
          "div",
          { class: "position-sticky top-0 bg-light p-0 m-0 row" },
          Actividad()
        ),
        (props.historial.length > 0 &&
          props.historial.map((item) => {
            return Actividad({ actividad: item });
          })) ||
          h(
            "div",
            { class: "text-center" },
            "No hay actividades en el historial."
          ),
      ]
    )
  );
}
