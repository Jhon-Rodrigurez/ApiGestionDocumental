package com.fesc.apigestiondocumental.models.respuestas;

public class UsuarioDataRestModel {
    
    private long id;
    private String idUsuario;
    private String documento;
    private String username;
    private String nombre;
    private String apellido;
    private String correo;
    private String telefono;
    private String cargo;
    private String passwordApp;
    
    public UsuarioDataRestModel() {
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(String idUsuario) {
        this.idUsuario = idUsuario;
    }
    public String getDocumento() {
        return documento;
    }
    public void setDocumento(String documento) {
        this.documento = documento;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getCorreo() {
        return correo;
    }
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getCargo() {
        return cargo;
    }
    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
    public String getPasswordApp() {
        return passwordApp;
    }
    public void setPasswordApp(String passwordApp) {
        this.passwordApp = passwordApp;
    }


}
