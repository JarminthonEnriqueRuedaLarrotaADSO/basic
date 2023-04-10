export default {
    data() {
        return {
            listEstudiante:[],
            listProfesor:[],
            cons:false,
            reporte:false,
            select:false,
            selectE:false,
            selectP:false,
            rol:{
                r1:'Estudiante', r2:'Profesor'
            },
            // sedes---------------------------------------
            sedes:{
                s1:'Bucaramanga',
                s2:'Bogota',
                s3:'Medellin',
                s4:'Mexico'
            },
            direccionSede:null,
            telSede:null,
            sede:[],
            // -------------------------------------------
            nombreProfesor: '',
            telefonoProfesor:'',
            teamsProfesor:'',
            teamsP:{
                dia:'',
                hora:'',
                salones:''
            },
            email:'',
            modalidad:'',
            // -------------------------------------------
            nombreEstudiante: '',
            telefonoEstudiante:'',
            teamsEstudiante:'',
            teamsE:{
                dia:'',
                hora:'',
                salones:''
            },
            asignatura:'',
            prerrequisito:'',
            // -------------------------------------------
            boton:null,
            radios:false,
            radios2:''
            // persona:{
            //     nombre:'carlos',
            //     edad:24
            // }



        }
    },
    methods: {
        ocultar(){
            if (this.select == false ) {
                this.select = true;
            }
            else if (this.boton == 'Estudiante') {
                this.selectE = true;
                this.selectP = false;
            }
            else if (this.boton == 'Profesor') {
                this.selectP = true;
                this.selectE = false 
            }
        },
        meterDatos(){
            const dtelSede = {
                tel:this.telSede,
                direc:this.direccionSede,
                lugarSede: this.sedes
            } 
            this.sede.push(dtelSede)

            if (this.boton == 'Estudiante') {
                const datosEstudiante = {
                    nombreEstudiante: this.nombreEstudiante,
                    telefonoEstudiante: this.telefonoEstudiante,
                    teamsEstudiante: this.teamsEstudiante,
                    dia: this.teamsE.dia,
                    Hora: this.teamsE.hora,
                    salones: this.teamsE.salones,
                    pre : this.prerrequisito,
                    asig: this.asignatura     
                } 
                this.listEstudiante.push(datosEstudiante)
                console.log(this.listEstudiante); 
            }
            else if (this.boton == 'Profesor') {
                const datosProfesor = {
                    nombreProfesor: this.nombreProfesor,
                    telefonoProfesor: this.telefonoProfesor,
                    teamsProfesor: this.teamsProfesor,
                    dia: this.teamsP.dia,
                    Hora: this.teamsP.hora,
                    salones: this.teamsP.salones,
                    modalidad: this.modalidad,
                    email: this.email
                } 
                this.listProfesor.push(datosProfesor)
                console.log(this.listProfesor); 
            }
            
        },
        mConsulta(){
            this.cons = !this.cons
            // if (this.cons == this.cons) {
            // this.cons= true
            // }
        },
        mReporte (){
            if (this.reporte == this.reporte) {
                this.reporte = true
            }
        }
// consultas----------------------------------------------
// consultas con destructing------------------------------
    },
    // computed:{
    //     name(){
    //         const {nombre} = this.persona
    //         return nombre
    //     } @click.prevent="mConsulta"
    

    // }
}