import React , {useState}from 'react'
import './Add_Branch.css'
function Add_Branch() {
    const newDate = new Date()
    const [BranchNo, changeBranch] = useState('');
    const [Street, changeStreet] = useState('');
    const [City, changeCity] = useState('');
    const [PostCode1, changePostCode1] = useState('');
    const [PostCode, changePostCode] = useState(newDate.toISOString().slice(0, 10));
    const [BranchContact, changeContact] = useState('');
    const [Mid, changeMid] = useState('');


    const handleForm=async(e)=>{
        e.preventDefault();
        const response=await fetch('/addBranch',{
            method:'POST',
            body:JSON.stringify({
                BranchNo,
                Street,
                City,
                PostCode,
                BranchContact,
                Mid
            }),
            headers:{'Content-type':'application/json'},

        })
    }


    return (
        <div className='e-login_1' >
            <form className='login-form_1'>
                <div className='main-container_1'>
                <div className='reg-con_1' id='reg-con_1' >
                        <div className="register_1"> <div> Add Branch<br /></div></div>
                        <div className='content-1_1'>
                            <div className='sub-content-1_1'>
                                <input className='inp_1' type='text' value={BranchNo} placeholder="Branch Number" onChange={(e) => changeBranch(e.target.value)} ></input>
                            </div>
                            <div className='sub-content-1_1'>

                                <input className='inp_1' type='text' value={Street} placeholder="Street Name" onChange={(e) => changeStreet(e.target.value)} ></input>
                            </div>

                        </div >
                        <div className='content-1_1'>
                            <div className='sub-content-2_1'>
                                {/* <span class="material-symbols-outlined">
                                    person
                                </span> */}
                                <input className='inp_1' type='text' value={City} placeholder="City" onChange={(e) => changeCity(e.target.value)} ></input>
                            </div>

                        </div>
                      
                        <div className='content-1_1'>
                            <div className='sub-content-2_1'>
                                {/* <span class="material-symbols-outlined">
                                    person
                                </span> */}
                                <input className='inp_1' type='text' value={PostCode1} placeholder="Post Code" onChange={(e) => changePostCode1(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='content-1_1'>
                            <div className='sub-content-2_1'>
                                {/* <span class="material-symbols-outlined">
                                    person
                                </span> */}
                                <input className='inp_1' type='text' value={BranchContact} placeholder="Branch Contact" onChange={(e) => changeContact(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='content-1_1'>
                            <div className='sub-content-2_1'>
                                {/* <span class="material-symbols-outlined">
                                    person
                                </span> */}
                                <input className='inp_1' type='text' value={Mid} placeholder="Manager Id" onChange={(e) => changeMid(e.target.value)} ></input>
                            </div>

                        </div>
                        </div>
                </div>
                <div className='Buttons1_1'>
                    <button className='submit-button_1' type='submit' >SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Add_Branch