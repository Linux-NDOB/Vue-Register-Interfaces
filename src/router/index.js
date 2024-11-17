import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import MainView from '@/views/MainView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFound from '@/views/NotFound.vue'
import { isAuthenticated } from '@/services/auth/authService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView,
      children: [
        {
          path: '/',
          name: 'inicio',
          component: HelloWorld,
          meta: { requiresAuth: true }
        },
        //solicitantes
        {
          path: '/solicitantes',
          name: 'solicitantes',
          component: () => import('../views/solicitantes/ListaSolicitantes.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/solicitantes-agregar',
          name: 'solicitantes-agregar',
          component: () => import('../views/solicitantes/AgregarSolicitante.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/solicitantes-ver',
          name: 'solicitantes-ver',
          component: () => import('../views/solicitantes/DatosSolicitante.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/solicitantes-editar',
          name: 'solicitantes-editar',
          component: () => import('../views/solicitantes/EditarSolicitante.vue'),
          meta: { requiresAuth: true }
        },
        // miembros
        {
          path: '/miembros',
          name: 'miembros',
          component: () => import('../views/miembros/ListaMiembros.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/miembros-agregar',
          name: 'miembros-agregar',
          component: () => import('../views/miembros/AgregarMiembro.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/miembros-editar',
          name: 'miembros-editar',
          component: () => import('../views/miembros/EditarMiembro.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/miembros-ver',
          name: 'miembros-ver',
          component: () => import('../views/miembros/DatosMiembro.vue'),
          meta: { requiresAuth: true }
        },
        //invitados
        {
          path: '/invitados',
          name: 'invitados',
          component: () => import('../views/invitados/ListaInvitados.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/invitados-agregar',
          name: 'invitados-agregar',
          component: () => import('../views/invitados/AgregarInvitado.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/invitados-editar',
          name: 'invitados-editar',
          component: () => import('../views/invitados/EditarInvitado.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/invitados-ver',
          name: 'invitados-ver',
          component: () => import('../views/invitados/DatosInvitado.vue'),
          meta: { requiresAuth: true }
        },
        //tareas
        {
          path: '/tareas',
          name: 'tareas',
          component: () => import('../views/tareas/ListaTareas.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/tareas-agregar',
          name: 'tareas-agregar',
          component: () => import('../views/tareas/AgregarTarea.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/tareas-editar',
          name: 'tareas-editar',
          component: () => import('../views/tareas/EditarTarea.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/tareas-ver',
          name: 'tareas-ver',
          component: () => import('../views/tareas/DatosTarea.vue'),
          meta: { requiresAuth: true }
        },
        //actas
        {
          path: '/actas',
          name: 'actas',
          component: () => import('../views/actas/ListaActas.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/actas-agregar',
          name: 'actas-agregar',
          component: () => import('../views/actas/AgregarActa.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/actas-editar/:id',
          name: 'actas-editar',
          component: () => import('../views/actas/EditarActa.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/actas-ver',
          name: 'actas-ver',
          component: () => import('../views/actas/DatosActa.vue'),
          meta: { requiresAuth: true }
        },
        //descripcion
        {
          path: '/descripcion',
          name: 'descripcion',
          component: () => import('../views/descripcion/ListaDescripcion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/descripcion-agregar',
          name: 'descripcion-agregar',
          component: () => import('../views/descripcion/AgregarDescripcion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/descripcion-editar/:id',
          name: 'descripcion-editar',
          component: () => import('../views/descripcion/EditarDescripcion.vue'),
          meta: { requiresAuth: true }
        },
        //solicitud
        {
          path: '/solicitud',
          name: 'solicitud',
          component: () => import('../views/solicitud/ListaSolicitud.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/solicitud-agregar',
          name: 'solicitud-agregar',
          component: () => import('../views/solicitud/AgregarSolicitud.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/solicitud-ver',
          name: 'solicitud-ver',
          component: () => import('../views/solicitud/VerSolitud.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/solicitud-editar',
          name: 'solicitud-editar',
          component: () => import('../views/solicitud/EditarSolicitud.vue'),
          meta: { requiresAuth: true }
        },
        //orden_sesion
        {
          path: '/orden-sesion',
          name: 'orden-sesion',
          component: () => import('../views/orden_sesion/ListaOrdenSesion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/orden-sesion-agregar',
          name: 'orden-sesion-agregar',
          component: () => import('../views/orden_sesion/AgregarOrdenSesion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/orden-sesion-editar/:id',
          name: 'orden-sesion-editar',
          component: () => import('../views/orden_sesion/EditarOrdenSesion.vue'),
          meta: { requiresAuth: true }
        },
        //asistencia
        {
          path: '/asistencia-invitado',
          name: 'asistencia-invitado',
          component: () => import('../views/asistencia_invitado/ListaAsistencias.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/asistencia-invitado-agregar',
          name: 'asistencia-invitado-agregar',
          component: () => import('../views/asistencia_invitado/AgregarAsistencia.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/asistencia-invitado-editar/:id',
          name: 'asistencia-invitado-editar',
          component: () => import('../views/asistencia_invitado/EditarAsistencia.vue'),
          meta: { requiresAuth: true }
        },
        //sesion
        {
          path: '/sesion',
          name: 'sesion',
          component: () => import('../views/sesion/ListaSesion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/sesion-ver',
          name: 'sesion-ver',
          component: () => import('../views/sesion/DatosSesion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/sesion-agregar',
          name: 'sesion-agregar',
          component: () => import('../views/sesion/AgregarSesion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/sesion-editar',
          name: 'sesion-editar',
          component: () => import('../views/sesion/EditarSesion.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/sesion-iniciar',
          name: 'sesion-iniciar',
          component: () => import('../views/sesion/IniciarSesion.vue'),
          meta: { requiresAuth: true }
        },
        //asistencia_miembros
        {
          path: '/asistencia-miembros',
          name: 'asistencia-miembros',
          component: () => import('../views/asistencia_miembros/ListaAsistenciaMiembros.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/asistencia-miembros-agregar',
          name: 'asistencia-miembros-agregar',
          component: () => import('../views/asistencia_miembros/AgregarAsistenciaMiembros.vue')
        },
        {
          path: '/asistencia-miembros-editar',
          name: 'asistencia-miembros-editar',
          component: () => import('../views/asistencia_miembros/EditarAsistenciaMiembros.vue')
        },
        //proposiciones
        {
          path: '/proposiciones',
          name: 'proposiciones',
          component: () => import('../views/proposiciones/ListaProposiciones.vue'),
          meta: { requiresAuth: true }
        },
        //encargados tareas
        {
          path: '/encargados-tareas',
          name: 'encargados-tareas',
          component: () => import('../views/encargados_tareas/ListaEncargadosTareas.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/encargados-tareas-ver',
          name: 'encargados-tareas-ver',
          component: () => import('../views/encargados_tareas/DatosEncargadoTareas.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

// // Guard de navegación para proteger las rutas
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isAuthenticated()) {
//       next({ name: 'login' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
