# Portfolio Personal - Desarrollador Full Stack & Data Scientist

Un portfolio profesional moderno y responsive diseñado para destacar habilidades en desarrollo full stack y ciencia de datos, optimizado para empresas como Globant, MercadoLibre y otras empresas tecnológicas.

## 🚀 Características

- **Diseño Moderno**: Interface limpia y profesional con animaciones suaves
- **Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Performance**: Carga rápida y optimización SEO
- **Accesible**: Cumple estándares de accesibilidad web
- **Dark Mode**: Soporte para tema oscuro/claro
- **Animaciones**: Transiciones fluidas con Framer Motion
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **React Router** - Navegación
- **Vite** - Build tool y dev server

### Herramientas
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad de navegadores

## 📁 Estructura del Proyecto

```
portfolio-personal/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Navbar.tsx     # Navegación principal
│   │   ├── Hero.tsx       # Sección de presentación
│   │   ├── About.tsx      # Información personal
│   │   ├── Skills.tsx     # Habilidades técnicas
│   │   ├── Experience.tsx # Experiencia laboral
│   │   ├── Projects.tsx   # Proyectos destacados
│   │   ├── Contact.tsx    # Formulario de contacto
│   │   └── Footer.tsx     # Pie de página
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── index.html             # HTML principal
├── package.json           # Dependencias
├── tailwind.config.js     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
└── vite.config.ts         # Configuración Vite
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/portfolio-personal.git
   cd portfolio-personal
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📦 Build y Deployment

### Build para producción
```bash
npm run build
```

### Preview del build
```bash
npm run preview
```

### Deployment en GitHub Pages
1. Configurar el repositorio en GitHub
2. Habilitar GitHub Pages en Settings > Pages
3. Seleccionar la rama `main` y carpeta `/root`
4. El sitio estará disponible en: `https://tu-usuario.github.io/portfolio-personal`

### Deployment en Vercel
1. Conectar el repositorio a Vercel
2. Configurar automáticamente con los settings por defecto
3. El sitio se desplegará automáticamente

### Deployment en Netlify
1. Conectar el repositorio a Netlify
2. Configurar build command: `npm run build`
3. Configurar publish directory: `dist`

## 🎨 Personalización

### Información Personal
Editar los siguientes archivos para personalizar:

- `src/components/Hero.tsx` - Información principal
- `src/components/About.tsx` - Descripción personal
- `src/components/Skills.tsx` - Habilidades técnicas
- `src/components/Experience.tsx` - Experiencia laboral
- `src/components/Projects.tsx` - Proyectos
- `src/components/Contact.tsx` - Información de contacto

### Colores y Estilos
Modificar `tailwind.config.js` para cambiar:
- Paleta de colores
- Fuentes
- Espaciado
- Breakpoints

### Imágenes
- Agregar tu foto de perfil en `public/`
- Actualizar las rutas en los componentes
- Optimizar imágenes para web

## 📱 Responsive Design

El portfolio está optimizado para:
- **Móvil**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuración Avanzada

### Variables de Entorno
Crear `.env.local` para configuraciones:
```
VITE_EMAIL_SERVICE_ID=tu_service_id
VITE_EMAIL_TEMPLATE_ID=tu_template_id
VITE_EMAIL_PUBLIC_KEY=tu_public_key
```

### Integración con EmailJS
Para el formulario de contacto:
1. Crear cuenta en EmailJS
2. Configurar servicio de email
3. Actualizar las variables de entorno
4. Implementar en `Contact.tsx`

## 📈 SEO y Performance

### Meta Tags
Configurados en `index.html`:
- Open Graph para redes sociales
- Twitter Cards
- Meta descriptions
- Keywords relevantes

### Performance
- Lazy loading de componentes
- Optimización de imágenes
- Code splitting automático
- Minificación en producción

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: tu-email@ejemplo.com
- **LinkedIn**: [Tu Perfil LinkedIn](https://linkedin.com/in/tu-perfil)
- **GitHub**: [Tu Usuario GitHub](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lucide React](https://lucide.dev/) - Iconos
- [Vite](https://vitejs.dev/) - Build tool

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
