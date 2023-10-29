import React, {useState, useEffect, Redirect} from 'react';
import { Button, FormControl, Row } from 'react-bootstrap';
import DeleteCageModal from './DeleteCageModal';

function CageTableContent({cage, reloadState}) {
    //#region Modal
        //Delete Modal
    const [showDeleteModal, setShowDelete] = useState(false);
    const handleCloseDeleteModal = () => setShowDelete(false);
    const handleShowDeleteModal = () => setShowDelete(true);
        //Show Animal Modal
    const [showAnimalModal, setShowAnimal] = useState(false);
    const handleCloseAnimalModal = () => setShowAnimal(false);
    const handleShowAnimalModal = () => setShowAnimal(true);
    //#endregion
    const [cageName, setCageName] = useState(cage.cageName);
    const [areaName, setAreaName] = useState(cage.area.areaName);
    const [animalList, setAnimalList] = useState([]);
    
    useEffect(() => {
        setCageName(cage.cageName);
        setAreaName(cage.area.areaName);
      }, [cage.cageName, cage.area.areaName]);

    let handleUpdate = () => {
        fetch(`https://localhost:7193/api/Cage/`, {
            method: "PUT",
            body: JSON.stringify({
                cageId: cage.cageId,
                cageName: cageName,
                areaId: cage.area.areaId,
                area: {
                    areaId: cage.area.areaId,
                    areaName: cage.area.areaName,
                    isDelete: false
                },
                isDelete: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("token"))
            }
        })
        .then((res) => {
            if (res.ok) {
                alert("Update successfully");
                reloadState.setReload(!reloadState.reload);
            } else {
                alert("Update failed");
            }
        }).catch(rejected => {
            console.log(rejected);
        });
    }
    let handleDelete = () => {
        fetch(`https://localhost:7193/api/Cage/${cage.cageId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("token"))
            },
        })
            .then((res) => {
                if (res.ok) {
                    alert("Delete successfully");
                    reloadState.setReload(!reloadState.reload);
                } else {
                    alert("Delete failed");
                }
            })
            .catch(rejected => {
                console.log(rejected);
            });
        handleCloseDeleteModal();
        reloadState.setReload(!reloadState.reload);
    }
    let handleShowAnimal = () => {
        fetch(`https://localhost:7193/api/AnimalCage/cage/${cage.cageId}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "bearer " + JSON.parse(localStorage.getItem("token"))
            },
        })
            .then((res) => res.json())
            .then(data => {
                setAnimalList(data);
            }).catch(rejected => {
                console.log(rejected);
            });
    }
    return ( 
        <tr>
            <td>{cage.area.areaName}{cage.cageId}</td>
            <td>
                <FormControl 
                type='text' 
                value={cageName}
                onChange={
                (e) => setCageName(e.target.value)} />
            </td>
            <td>
                <FormControl 
                type='text'
                disabled
                value={areaName} />
            </td>
            <td className="text-center">
                <Button variant="outline-success" size="sm" onClick={handleShowAnimal}>Animals</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleUpdate}>Update</Button>
            </td>
            <td className="text-center">
                <Button variant="outline-primary" size="sm" onClick={handleShowDeleteModal}>Delete</Button>
            </td>

            <DeleteCageModal cage={cage} show={showDeleteModal} handleClose={handleCloseDeleteModal} handleDelete={handleDelete} />
        </tr>
     )
}
export default CageTableContent;