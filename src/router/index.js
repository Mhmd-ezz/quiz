import {createRouter, createWebHistory} from "vue-router";
import QuizzesView from "../views/Quizzes.vue"
import QuizView from "../views/Quiz.vue"
import QuestionView from "../components/Question.vue"
import notFound from "../views/404.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizzes",
            component: QuizzesView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView,
            children: [
                {
                    path: 'question',
                    component: QuestionView
                }
            ]
        },
        {
            path: '/:catchall(.*)*',
            name: 'notFound',
            component: notFound
        }
    ]
})

export default router
