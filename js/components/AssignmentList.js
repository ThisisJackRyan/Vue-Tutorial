import Assignment from "./Assignment.js"
export default {
    components: {Assignment},

    template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mt-6">{{ title }}</h2>
        <ul class="border border-gray-600 divide-y divide-gray-600" >
            <Assignment 
                v-for="assignment in assignments"
                :key="assignment.id"
                :assignment="assignment"
            >
            </Assignment>
        </ul>
    </section>
    `,

    props: {
        assignments: Array,
        title: String,
    }
}