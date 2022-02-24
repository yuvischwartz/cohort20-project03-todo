import React, {useState, useEffect} from 'react';
import Button from './Button';

function ContactPageForm(props) {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Your message was sent.')
    }
    return (
        <>
               <form className={'mr-auto'}>
                        <fieldset>
                            <label>
                            <p className={'text-left ml-8 pb-4'}>Full Name</p>
                                <input type="textArea" className={'border w-2/3 px-1 outline-none rounded text-left'} placeholder={'Place your name..'} />
                            </label>
                        </fieldset>
                        <fieldset>
                            <label>
                            <p className={'text-left ml-8 py-4'}>Subject</p>
                                <input type="textArea" className={'border w-2/3 px-1 outline-none rounded'} placeholder={'Place your name..'} />
                            </label>
                        </fieldset>
                        <fieldset>
                            <label>
                            <p className={'text-left ml-8 py-4'}>Message</p>
                                <input type="textArea" className={'border w-2/3 px-1 outline-none rounded'} placeholder={'Place your name..'} />
                            </label>
                        </fieldset>
                        <div className={'py-8 ml-5'}>
                        <Button buttonText={'Send Message'} someFunc={handleSubmit} />
                        </div>
                     </form>
        </>
    );
}

export default ContactPageForm;