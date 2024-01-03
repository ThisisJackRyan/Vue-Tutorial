import AssignmentList from "./AssignmentList.js";

export default{
    components: {AssignmentList},
    template: `
    <section class="space-y-6">
        <AssignmentList :assignments="filters.inProgress" title="In Progress"></AssignmentList>
        <AssignmentList :assignments="filters.completed" title="Completed"></AssignmentList>
    </section>
    `,

    data() {
        return {
            assignments: [
                {name: "Finish Project", complete: false, id: 1},
                {name: "Read Chapter 4", complete: false, id: 2},
                {name: "Turn in Homework", complete: false, id: 3},
            ]
        }
    },

    computed: {
        filters(){
            return {
                inProgress:  this.assignments.filter(assignment => ! assignment.complete),
                completed:  this.assignments.filter(assignment => assignment.complete),
            }
        }
    }
}