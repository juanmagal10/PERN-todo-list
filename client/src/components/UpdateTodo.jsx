import React from 'react'

const UpdateTodo = ({toDos=[],setToDos,singleToDo}) => {
  return (
    <>  
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Edit to-do
        </button>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit to-do</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <input className="form-control" value={singleToDo.todo}/>
              
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default UpdateTodo
