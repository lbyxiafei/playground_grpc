/* This file was generated by upbc (the upb compiler) from the input
 * file:
 *
 *     src/proto/grpc/lb/v1/load_balancer.proto
 *
 * Do not edit -- your changes will be discarded when the file is
 * regenerated. */

#include <stddef.h>
#include "upb/msg_internal.h"
#include "src/proto/grpc/lb/v1/load_balancer.upb.h"
#include "google/protobuf/duration.upb.h"
#include "google/protobuf/timestamp.upb.h"

#include "upb/port_def.inc"

static const upb_MiniTable_Sub grpc_lb_v1_LoadBalanceRequest_submsgs[2] = {
  {.submsg = &grpc_lb_v1_InitialLoadBalanceRequest_msginit},
  {.submsg = &grpc_lb_v1_ClientStats_msginit},
};

static const upb_MiniTable_Field grpc_lb_v1_LoadBalanceRequest__fields[2] = {
  {1, UPB_SIZE(4, 8), UPB_SIZE(-1, -1), 0, 11, kUpb_FieldMode_Scalar | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
  {2, UPB_SIZE(4, 8), UPB_SIZE(-1, -1), 1, 11, kUpb_FieldMode_Scalar | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
};

const upb_MiniTable grpc_lb_v1_LoadBalanceRequest_msginit = {
  &grpc_lb_v1_LoadBalanceRequest_submsgs[0],
  &grpc_lb_v1_LoadBalanceRequest__fields[0],
  UPB_SIZE(8, 24), 2, kUpb_ExtMode_NonExtendable, 2, 255, 0,
};

static const upb_MiniTable_Field grpc_lb_v1_InitialLoadBalanceRequest__fields[1] = {
  {1, UPB_SIZE(0, 0), UPB_SIZE(0, 0), kUpb_NoSub, 9, kUpb_FieldMode_Scalar | (kUpb_FieldRep_StringView << kUpb_FieldRep_Shift)},
};

const upb_MiniTable grpc_lb_v1_InitialLoadBalanceRequest_msginit = {
  NULL,
  &grpc_lb_v1_InitialLoadBalanceRequest__fields[0],
  UPB_SIZE(8, 24), 1, kUpb_ExtMode_NonExtendable, 1, 255, 0,
};

static const upb_MiniTable_Field grpc_lb_v1_ClientStatsPerToken__fields[2] = {
  {1, UPB_SIZE(0, 0), UPB_SIZE(0, 0), kUpb_NoSub, 9, kUpb_FieldMode_Scalar | (kUpb_FieldRep_StringView << kUpb_FieldRep_Shift)},
  {2, UPB_SIZE(8, 16), UPB_SIZE(0, 0), kUpb_NoSub, 3, kUpb_FieldMode_Scalar | (kUpb_FieldRep_8Byte << kUpb_FieldRep_Shift)},
};

const upb_MiniTable grpc_lb_v1_ClientStatsPerToken_msginit = {
  NULL,
  &grpc_lb_v1_ClientStatsPerToken__fields[0],
  UPB_SIZE(16, 24), 2, kUpb_ExtMode_NonExtendable, 2, 255, 0,
};

static const upb_MiniTable_Sub grpc_lb_v1_ClientStats_submsgs[2] = {
  {.submsg = &google_protobuf_Timestamp_msginit},
  {.submsg = &grpc_lb_v1_ClientStatsPerToken_msginit},
};

static const upb_MiniTable_Field grpc_lb_v1_ClientStats__fields[6] = {
  {1, UPB_SIZE(4, 8), UPB_SIZE(1, 1), 0, 11, kUpb_FieldMode_Scalar | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
  {2, UPB_SIZE(16, 24), UPB_SIZE(0, 0), kUpb_NoSub, 3, kUpb_FieldMode_Scalar | (kUpb_FieldRep_8Byte << kUpb_FieldRep_Shift)},
  {3, UPB_SIZE(24, 32), UPB_SIZE(0, 0), kUpb_NoSub, 3, kUpb_FieldMode_Scalar | (kUpb_FieldRep_8Byte << kUpb_FieldRep_Shift)},
  {6, UPB_SIZE(32, 40), UPB_SIZE(0, 0), kUpb_NoSub, 3, kUpb_FieldMode_Scalar | (kUpb_FieldRep_8Byte << kUpb_FieldRep_Shift)},
  {7, UPB_SIZE(40, 48), UPB_SIZE(0, 0), kUpb_NoSub, 3, kUpb_FieldMode_Scalar | (kUpb_FieldRep_8Byte << kUpb_FieldRep_Shift)},
  {8, UPB_SIZE(8, 16), UPB_SIZE(0, 0), 1, 11, kUpb_FieldMode_Array | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
};

const upb_MiniTable grpc_lb_v1_ClientStats_msginit = {
  &grpc_lb_v1_ClientStats_submsgs[0],
  &grpc_lb_v1_ClientStats__fields[0],
  UPB_SIZE(48, 56), 6, kUpb_ExtMode_NonExtendable, 3, 255, 0,
};

static const upb_MiniTable_Sub grpc_lb_v1_LoadBalanceResponse_submsgs[3] = {
  {.submsg = &grpc_lb_v1_InitialLoadBalanceResponse_msginit},
  {.submsg = &grpc_lb_v1_ServerList_msginit},
  {.submsg = &grpc_lb_v1_FallbackResponse_msginit},
};

static const upb_MiniTable_Field grpc_lb_v1_LoadBalanceResponse__fields[3] = {
  {1, UPB_SIZE(4, 8), UPB_SIZE(-1, -1), 0, 11, kUpb_FieldMode_Scalar | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
  {2, UPB_SIZE(4, 8), UPB_SIZE(-1, -1), 1, 11, kUpb_FieldMode_Scalar | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
  {3, UPB_SIZE(4, 8), UPB_SIZE(-1, -1), 2, 11, kUpb_FieldMode_Scalar | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
};

const upb_MiniTable grpc_lb_v1_LoadBalanceResponse_msginit = {
  &grpc_lb_v1_LoadBalanceResponse_submsgs[0],
  &grpc_lb_v1_LoadBalanceResponse__fields[0],
  UPB_SIZE(8, 24), 3, kUpb_ExtMode_NonExtendable, 3, 255, 0,
};

const upb_MiniTable grpc_lb_v1_FallbackResponse_msginit = {
  NULL,
  NULL,
  UPB_SIZE(0, 8), 0, kUpb_ExtMode_NonExtendable, 0, 255, 0,
};

static const upb_MiniTable_Sub grpc_lb_v1_InitialLoadBalanceResponse_submsgs[1] = {
  {.submsg = &google_protobuf_Duration_msginit},
};

static const upb_MiniTable_Field grpc_lb_v1_InitialLoadBalanceResponse__fields[1] = {
  {2, UPB_SIZE(4, 8), UPB_SIZE(1, 1), 0, 11, kUpb_FieldMode_Scalar | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
};

const upb_MiniTable grpc_lb_v1_InitialLoadBalanceResponse_msginit = {
  &grpc_lb_v1_InitialLoadBalanceResponse_submsgs[0],
  &grpc_lb_v1_InitialLoadBalanceResponse__fields[0],
  UPB_SIZE(8, 24), 1, kUpb_ExtMode_NonExtendable, 0, 255, 0,
};

static const upb_MiniTable_Sub grpc_lb_v1_ServerList_submsgs[1] = {
  {.submsg = &grpc_lb_v1_Server_msginit},
};

static const upb_MiniTable_Field grpc_lb_v1_ServerList__fields[1] = {
  {1, UPB_SIZE(0, 0), UPB_SIZE(0, 0), 0, 11, kUpb_FieldMode_Array | (kUpb_FieldRep_Pointer << kUpb_FieldRep_Shift)},
};

const upb_MiniTable grpc_lb_v1_ServerList_msginit = {
  &grpc_lb_v1_ServerList_submsgs[0],
  &grpc_lb_v1_ServerList__fields[0],
  UPB_SIZE(4, 8), 1, kUpb_ExtMode_NonExtendable, 1, 255, 0,
};

static const upb_MiniTable_Field grpc_lb_v1_Server__fields[4] = {
  {1, UPB_SIZE(8, 8), UPB_SIZE(0, 0), kUpb_NoSub, 12, kUpb_FieldMode_Scalar | (kUpb_FieldRep_StringView << kUpb_FieldRep_Shift)},
  {2, UPB_SIZE(0, 0), UPB_SIZE(0, 0), kUpb_NoSub, 5, kUpb_FieldMode_Scalar | (kUpb_FieldRep_4Byte << kUpb_FieldRep_Shift)},
  {3, UPB_SIZE(16, 24), UPB_SIZE(0, 0), kUpb_NoSub, 9, kUpb_FieldMode_Scalar | (kUpb_FieldRep_StringView << kUpb_FieldRep_Shift)},
  {4, UPB_SIZE(4, 4), UPB_SIZE(0, 0), kUpb_NoSub, 8, kUpb_FieldMode_Scalar | (kUpb_FieldRep_1Byte << kUpb_FieldRep_Shift)},
};

const upb_MiniTable grpc_lb_v1_Server_msginit = {
  NULL,
  &grpc_lb_v1_Server__fields[0],
  UPB_SIZE(24, 40), 4, kUpb_ExtMode_NonExtendable, 4, 255, 0,
};

static const upb_MiniTable *messages_layout[9] = {
  &grpc_lb_v1_LoadBalanceRequest_msginit,
  &grpc_lb_v1_InitialLoadBalanceRequest_msginit,
  &grpc_lb_v1_ClientStatsPerToken_msginit,
  &grpc_lb_v1_ClientStats_msginit,
  &grpc_lb_v1_LoadBalanceResponse_msginit,
  &grpc_lb_v1_FallbackResponse_msginit,
  &grpc_lb_v1_InitialLoadBalanceResponse_msginit,
  &grpc_lb_v1_ServerList_msginit,
  &grpc_lb_v1_Server_msginit,
};

const upb_MiniTable_File src_proto_grpc_lb_v1_load_balancer_proto_upb_file_layout = {
  messages_layout,
  NULL,
  NULL,
  9,
  0,
  0,
};

#include "upb/port_undef.inc"

