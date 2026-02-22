import Field from "./Field.tsx";

interface Props {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchTaskForm = ({setSearchQuery, searchQuery}: Props) => {
    return (
        <form className="todo__form" onSubmit={(event) => event.preventDefault()}>
            <Field
                id='search-task'
                label='Search task'
                className='todo__field'
                type='search'
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.currentTarget.value)}/>
        </form>
    )
}

export default SearchTaskForm;