import { h } from "vue";

export default function Actividad(props) {
  const actividad = props && props.actividad;
  return (
    (actividad && [
      h("div", { class: "col-md-6 border" }, actividad.titulo),
      h("div", { class: "col-md-3 border" }, actividad.participantes),
      h("div", { class: "col-md-3 border text-capitalize" }, actividad.tipo),
    ]) || [
      h("div", { class: "col-md-6 border font-weight-bold h5 text-truncate m-0" }, "Actividad"),
      h("div", { class: "col-md-3 border font-weight-bold h5 text-truncate m-0" }, "Participantes"),
      h("div", { class: "col-md-3 border font-weight-bold h5 text-truncate  m-0" }, "Tipo"),
    ]
  );
}
