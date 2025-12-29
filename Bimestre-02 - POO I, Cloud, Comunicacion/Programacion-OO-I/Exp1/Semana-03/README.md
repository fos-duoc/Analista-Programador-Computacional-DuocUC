<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-03-blue?style=flat-square)

# `Encapsulamiento`

</div>

---

### 📋 Contenido

| Tema | Descripción |
|:-----|:------------|
| `private` | Solo dentro de la clase |
| `public` | Acceso desde cualquier lugar |
| Getters | Obtener valor de atributo |
| Setters | Modificar valor de atributo |

---

### 💻 Código Clave

```java
public class Producto {
    private String nombre;
    private double precio;

    // Getter
    public String getNombre() {
        return nombre;
    }

    // Setter con validación
    public void setPrecio(double precio) {
        if (precio > 0) {
            this.precio = precio;
        }
    }

    public double getPrecio() {
        return precio;
    }
}
```

---

<div align="center">
<sub>Programación OO I · Experiencia 1</sub>
</div>
