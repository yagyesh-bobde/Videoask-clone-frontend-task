import React from 'react'

const Forum = () => {
  return (
      <div style={{ width: '50%', marginLeft: '25%', marginTop:'30%' }}>
        <div>
              <h4>Before you go, please leave your contact details so we can get back to you...</h4>
        </div>
          <form>
              <div class="form">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="*Your name"/>
            </div>
              <div class="form-group">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*Your email"/>
              </div>

              <button type="submit" class="btn newButton">Send your answer&#8594;</button>
          </form>
    </div>
  )
}

export default Forum
