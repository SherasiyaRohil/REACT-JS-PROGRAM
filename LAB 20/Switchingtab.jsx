// Write a program which disable submit button and show “Submitting…” while
// form sends data. (A)
import { use } from 'react';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
function SubmitButtton() {
    const {pending}=useFormStatus();
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    );
}
async function HsndleSubmit() {
    awa
}