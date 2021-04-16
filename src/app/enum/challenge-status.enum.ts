export enum ChallengeStatus {
    OPENED = 'E0001',
    CLOSED = 'E0002',
    SHIPPED = 'E0003',
    ACCEPTED = 'E0004',
    REJECTED = 'E0005',
    FINISHED = 'E0006',
    MISSED = 'E0007',
    IN_WAIT_TO_ACCEPT_INVITATION = 'E0008',
    IN_PROGRESS = 'E0009',
    BOTH_USER_UPLOAD_VIDEO = 'E0010',
    FINISH_INCOMPLETE = 'E0011',
}

// Challenger Flow
//  OPENED                          Se crea el reto
//  IN_WAIT_TO_ACCEPT_INVITATION    Se invita a personas
//  IN_PROGRESS                     Alguien acepto el reto
//  BOTH_USER_UPLOAD_VIDEO          Ambos subieron videos
//  CLOSED                          En votación
//  FINISHED                        Reto terminado
//  FINISH_INCOMPLETE               Reto terminado donde al menos uno de los usuarios no subio video