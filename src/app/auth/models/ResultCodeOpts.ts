export class ResultCodeOpts {
  public static readonly resultCodeOpts: Map<string, string> = new Map([
    ['1', "Mail ya registrado"],
    ['2', "Error en la validación"],
    ['3', "Usuario no encontrado"],
    ['4', "Contraseña inválida"],
    ['5', "No autorizado"],
    ['6', "No modificado"],
    ['7', "Usuario desactivado"],
    ['8', "Tiempo de modificación expirado"],
    ['9', "Error desconocido"],
    ['10', "Post no encontrado"],
    ['11', "Comentario no encontrado"]
  ]);

  public static getMsg(code: number): string {
    return ResultCodeOpts.resultCodeOpts.get(code.toString())!;
  }
}
