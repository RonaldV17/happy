import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap"; 
import { Button } from "react-bootstrap";

export default function Navigation() {
  return (
    <Form>
      <div class="mb-3 text-center">
        <Form.Label >Correo</Form.Label>
        <FormControl placeholder="Ingrese correo electrónico"></FormControl>
      </div>
      <div class="mb-3 text-center">
        <Form.Label>Descripción</Form.Label>
        <FormControl></FormControl>
      </div>
      <div class="enviar text-center">
      <Button type="button" class="btn btn-primary">Enviar</Button>
      </div>
    </Form>
  );
}
